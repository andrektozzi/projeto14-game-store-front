import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./Menu";
import Menu from "./Menu";
import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function TheSimsPage(){

    const URL = "https://game-store-driven.herokuapp.com/products"

    const {user} = useContext(UserContext);
    console.log(user);
    const config = {
    headers: {
        "Authorization": `Bearer ${user.token}`
    }}
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
            {products.map((e, index) => <Game key = {index} title = {e.title} description = {e.description} urlImage = {e.urlImage} price = {e.price}/>)}
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

function Game({title, description, urlImage, price}){

    return(
        <GameBox>
            <div> {title}</div>
            <img src={urlImage} />
            <div>{description}</div>
            <div>{price}</div>
            <button> add to Cart</button>
        </GameBox>
    )
}
const Container = styled.div``
const Games = styled.div``
const GameBox = styled.div``

