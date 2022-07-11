import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Menu from "./Menu";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

export default function FPSPage(){

    const URL = "https://game-store-driven.herokuapp.com/products"
    const {user} = useContext(UserContext);
    console.log(user);
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        async function fetchData(){
            try {
    
                const games = await axios.get(URL);
                console.log(games.data);
                console.log(games.data.filter(e => e.category === "fps"));
                const fpsGames = games.data.filter(e => e.category === "fps");
                setProducts(fpsGames);
                
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, [])

    function renderGames(){

        return(
            <>
            {products.map((e, index) => <Game key = {index} title = {e.title} description = {e.description} urlImage = {e.urlImage} price = {e.price} token = {user.token}/>)}
            </>
        )
    }
    const gameslist = renderGames();
        return(
            <Container>
                <Menu/>
                <Games>
                    {gameslist}
                </Games>
            </Container>
        )
}

function Game({title, description, urlImage, price, token}){
  
    async function addToCart(){
        console.log(token)
        const URL = "https://game-store-driven.herokuapp.com/cart"
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        
        const body = {title, urlImage, price}
        
        if(!token){
            console.log("não tem token")
            alert("É necessário estar logado para adicionar jogos ao carrinho. Por favor, faça!")
        } else{
            try {
                const cartProduct = await axios.post(URL, body, config);
                console.log(cartProduct)
            } catch (error) {
                console.log(error)
            }
        }

    }

    return(
        <GameBox>
            <MainText>
            <LeftSide>
            <h2> {title}</h2>
            <p>{'R$' + price.toFixed(2).replace('.',',')}</p>
                <Link to="/cart">
                 <button onClick={addToCart}> adicionar ao Carrinho</button>
                </Link>     
            </LeftSide>
            <img src={urlImage} alt={title}/>
            </MainText>
            <Text><p>{description}</p></Text>
        </GameBox>
    )
}
const Container = styled.div`
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
        font-size: 30px;
        color: blue;
        width: 250px;;
        text-align: center;
    }

    p{
        font-size: 16px;
        color: black;
    }
`
const Games = styled.div``
const GameBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;

    img{
        width: 80%;
        height: 400px;
    }
`
const MainText = styled.div`
display:flex;
flex-direction:row;
margin-bottom: 15px;

button{
    width: 130px;
    height: 90px;
    margin-bottom: 20px;
    color: blue;
    background-color: lightblue;
    border-radius: 5px;
}
`

const LeftSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 10px 0;
`

const Text = styled.div`
    margin-bottom: 15px;
`
