import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Menu";
import Menu from "./Menu";
import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function TheSimsPage(){

    const URL = "http://localhost:5000/products"
//https://game-store-driven.herokuapp.com
    const {user} = useContext(UserContext);
    console.log(user);
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        async function fetchData(){
            try {
    
                const games = await axios.get(URL);
                console.log(games.data);
                console.log(games.data.filter(e => e.category === "thesims"));
                const thesimsGames = games.data.filter(e => e.category === "thesims");
                setProducts(thesimsGames);
                
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
        const URL = "http://localhost:5000/cart"
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        
        const body = {title, urlImage, price}
        
        if(!token){
            console.log("não tem token")
            alert("It's necessary to be logged to add games to cart... Please, log in")
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
            <div> {title}</div>
            <img src={urlImage} />
            <div>{description}</div>
            <div>{price}</div>
            <button onClick={addToCart}> add to Cart</button>
        </GameBox>
    )
}
const Container = styled.div``
const Games = styled.div``
const GameBox = styled.div``

