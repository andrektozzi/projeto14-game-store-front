import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import styled from "styled-components";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Cart() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { token } = user;
    const [productsCart, setProductsCart] = useState([]);

    useEffect(() => {
        async function GetProductsCart() {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
    
          try {
            const { data } = await axios.get(
              "https://game-store-driven.herokuapp.com/cart", config
            );
    
            setProductsCart(data);
          } catch (error) {
            const message = error.response.statusText;
            alert(message);
          }
        }
        GetProductsCart();
      }, []);

    function RenderProducts() {
        if (productsCart.length === 0) {
          return (
            <div>
              <p>
                Não há produtos no carrinho!
              </p>
            </div>
        );
    }

    return productsCart.map((product, index) => {
        const { title, urlImage, price, _id } = product;
      
        return (
            <>
            <Product key={index}>
                <Info>
                    <Link to={`game/${_id}`}>
                      <img src={urlImage} alt="product" />
                    </Link>
                    <span> {title} </span>
                  </Info>
                  <Info>
                    <span>${price} </span>
                    <i onClick={() => Delete(_id)}>
                      <IoCloseCircleSharp />
                    </i>
                  </Info>
            </Product>
            </>
            );
          });
        }

    function CalculateTotal() {
        const initialValue = 0;
            
        return productsCart.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price;
        }, initialValue);
    }

    function RenderTotal() {
        if (productsCart.length > 0) {
            const total = CalculateTotal().toFixed(2);
            return (
                <>
                  <Total total={total}>
                    <span>SALDO</span>
                    <span>${total}</span>
                  </Total>
                  <Button>
                    <button onClick={() => SubmitCheckout(total)}>CHECKOUT</button>
                  </Button>
                    
                </>
            );
        }
    }

    async function Delete(_id) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        
        let confirmAlert = window.confirm(
              "Você tem certeza que quer remover esse produto do carrinho?"
        );
        
        if (!confirmAlert) {
              return;
        }
        
        try {
            const { data } = await axios.delete(
                `https://game-store-driven.herokuapp.com/cart/${_id}`,
                config
            );
              setProductsCart(data);
        } catch (error) {
            const message = error.response.statusText;
            alert(message);
        }
    }

    async function SubmitCheckout(total) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const body = {
            products: [...productsCart],
            total: parseFloat(total),
        };
        
        try {
            await axios.post(
                "https://game-store-driven.herokuapp.com/checkout",
                body,
                config
            );
            navigate("/checkout");
        } catch (error) {
            const message = error.response.statusText;
            alert(message);
        }
    }

    return (
        <>
            <Header>
                <span>Meu carrinho</span>
                <i>
                  <Link to="/">
                    <ion-icon name="home-outline"></ion-icon>
                  </Link>                  
                </i>
            </Header>
            <Container productsCart={productsCart}>
                <Products>{RenderProducts()}</Products>
                {RenderTotal()}
            </Container>
        </>
    );
}

const Container = styled.main`
  width: 100vw;
  min-height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: ${(props) =>
    props.productsCart.length === 0 ? "center" : "flex-start"};
  margin-top: 50px;
  padding: 15px;
  overflow-y: hidden;
  p {
    font-family: "Roboto", sans-serif;
    color: white;
    font-size: 24px;
    text-align: center;
    margin-bottom: 130px;
  }
`;

const Header = styled.div`
  background-color: #151515;
  color: white;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  span {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
  }
  
  ion-icon {
        font-size: 30px;
    }

    ion-icon:hover {
        transform: scale(1.1);
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
    width: 140px;
    height: 140px;
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