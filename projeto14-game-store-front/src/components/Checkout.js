import axios from "axios";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import Menu from "./Menu";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Checkout(){

    const { user } = useContext(UserContext);
    console.log(user);
    const { name, email, token } = user;
    const [productsCheckout, setProductsCheckout] = useState([]);
    const [total, setTotal] = useState(0);
    const [cardname, setCardname] = useState('');
    const [cardnumber, setCardnumber] = useState('');
    const [expdate, setExpdate] = useState('');
    const [cvv, setCvv] = useState('');
    

    useEffect(() => {
        async function GetProductsCheckout() {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
    
          try {
            const { data } = await axios.get(
              "https://game-store-driven.herokuapp.com/checkout", config
            );
            console.log(data, data.product, data.total);
            setProductsCheckout(data[0].products);
            setTotal(data[0].total)

          } catch (error) {
            const message = error.response.statusText;
            alert(message);
          }
        }
        GetProductsCheckout();
      }, []);


    function RenderProducts() {
        if (productsCheckout.length === 0) {
          return (
            <div>
              <p>
                Não há produtos no carrinho!
              </p>
            </div>
        );
    }

    return productsCheckout.map((product, index) => {
        const { title, urlImage, price, _id } = product;
      
        return (
            <>
            <Product key={index}>
                <Info>
                      <img src={urlImage} alt="product" />
                    <span> {title} </span>
                  </Info>
                  <Info>
                    <span>${price} </span>
                  </Info>
            </Product>
            </>
            );
          });
        }


    function RenderTotal() {
        if (productsCheckout.length > 0) {
            return (
                <>
                  <Total total={total}>
                    <span>Total:</span>
                    <span>${total}</span>
                  </Total>
                                      
                </>
            );
        }
    }

    async function SubmitCheckout(e) {
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const body = {
            productsCheckout,
            total,
            paymentMethod:{cardname, cardnumber, expdate, cvv}
        };
        
        console.log(body);
        try {
            await axios.post(
                "https://game-store-driven.herokuapp.com/purchases",
                body,
                config
            );
            await axios.delete(
                "https://game-store-driven.herokuapp.com/checkout",
                config
            );
            alert('Parabéns! Sua compra foi finalizada')
            
        } catch (error) {
            const message = error.response.statusText;
            alert(message);
        }
    }


 return (
    <>
        <Menu/>
        
        <Container>
            <form>
                <h3>Seus Dados</h3>
                <label>Nome</label>
                <input type='text' value={name} disabled/>
                <label>E-mail</label>
                <input type='email' value={email} disabled/>

                <h3>Seu carrinho</h3>
                <Products>{RenderProducts()}</Products>
                {RenderTotal()}

                <h3> Seus Dados Bancários</h3>
                <label>Cartões Aceitos</label>
                <label>Nome no Cartão</label>
                <input type="text" name="cardname" placeholder="John More Doe" value={cardname} onChange={(e) => setCardname(e.target.value)}/>
                <label>Número do Cartão</label>
                <input type="text" name="cardnumber" placeholder="1111-2222-3333-4444" value={cardnumber} onChange={(e) => setCardnumber(e.target.value)}/>
                <label > Data de Validade</label>
                <input type="text"  name="expdate" placeholder="06/23" value={expdate} onChange={(e) => setExpdate(e.target.value)}/>
                <label>CVC</label>
                <input type="text" name="cvv" placeholder="352" value={cvv} onChange={(e) => setCvv(e.target.value)}></input>
                <Link to={'/home'}>
                    <Button>
                        <button onClick={SubmitCheckout}>Finalizar Compra</button>
                    </Button>
                </Link>
            </form>

        </Container>  
    </>
 ) 
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: black;
    background-color: #F3F3F3;

    h1 {
        font-size: 70px;
        color: black;
    }
    
    h2 {
        font-size: 40px;
    }
`;
const Products = styled.div`
  width: 100%;
  height: calc((100vh - 280px));
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Product = styled.div`
  color: white;
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    margin-bottom: 70px;
    color: #ffffff;
  }
  span:nth-child(3) {
    font-weight: 700;
    color: #ffffff;
  }
  i {
    font-size: 22px;
    margin-bottom: 65px;
    color: #ffffff;
    margin-left: 30px;
    cursor: pointer;
  }
  img {
    width: 130px;
    height: 160px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Total = styled.div`
  color: #ffab2d;
  background-color: #151515;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 200px;
  padding: 15px;
  span {
    color: #ffffff;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }
  span:nth-child(2) {
    color: #ffab2d;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`;
