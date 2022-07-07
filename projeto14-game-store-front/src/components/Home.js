import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import TheSims from "./images/TheSims.png";
import Fifa from "./images/Fifa.png";
import Battlefield from "./images/Battlefield.png"
import LostInRandom from "./images/LostInRandom.png"
import StarWars from "./images/StarWars.png"
import WayOut from "./images/WayOut.png"

export default function Home () {

    return(
        <Container>
            <Navbar>
                <Link to="/signup">
                    <ion-icon name="person-add-outline"></ion-icon>
                </Link>    
                <Link to="/login">
                    <ion-icon name="log-in-outline"></ion-icon>
                </Link>
                <Link to="/cart">
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>          
            </Navbar>
            <Category>
                <Link to="/thesims">
                    <p>The Sims</p>
                </Link>
                <Link to="/esportes">
                    <p>Esportes</p>
                </Link>
                <Link to="/fps">
                    <p>FPS</p>
                </Link>
                <Link to="/rpg">
                    <p>RPG</p>
                </Link>
                <Link to="/starwars">
                    <p>Star Wars</p>
                </Link>
                <Link to="/acao">
                    <p>Ação</p>
                </Link>                      
            </Category>
            <Header>
                <h1>Game Store</h1>
            </Header>
            <h2>Jogos em destaque</h2>
            <Games>
                <Game>
                    <Link to="/thesims">
                        <img src={TheSims} alt="The Sims"/>  
                    </Link>
                    <p>The Sims</p>  
                </Game>
                <Game>
                    <Link to="/esportes">
                        <img src={Fifa} alt="Fifa"/>
                    </Link>
                    <p>Esportes</p>  
                </Game>
                <Game>
                    <Link to="/fps">
                        <img src={Battlefield} alt="Battlefield" />
                    </Link>
                    <p>FPS</p>  
                </Game>                                       
                <Game>
                    <Link to="/rpg">
                        <img src={LostInRandom} alt="LostInRandom" />
                    </Link>
                    <p>RPG</p>  
                </Game>
                <Game>
                    <Link to="/starwars">
                        <img src={StarWars} alt="StarWars" />
                    </Link>
                    <p>Star Wars</p>  
                </Game>
                <Game>
                    <Link to="/acao">
                        <img src={WayOut} alt="WayOut" />
                    </Link>
                    <p>Ação</p>  
                </Game>
            </Games>           
        </Container>
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

const Navbar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: black;

    ion-icon {
        font-size: 30px;
        margin-right: 20px;
        margin-bottom: 25px;
    }

    ion-icon:hover {
        transform: scale(1.1);
    }
`;

const Category = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
   p {
    color: black;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 30px;
   }

   p:hover {
    opacity:0.7;
    color: darkgrey;
    transform: scale(1.1);
}
`;

const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
    margin-top: 10px;
`;

const Games = styled.div`
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(3, auto);
`;

const Game = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;

img {
    padding: 8px;
    margin-bottom: 10px;
    margin-right: 15px;
    margin-left: 15px;
    cursor: pointer;
}

img:hover {
  opacity:0.3;
  transform: scale(1.1);
}

p:hover {
  opacity:0.3;
}
`;