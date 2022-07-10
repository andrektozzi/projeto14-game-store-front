import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import TheSims from "./images/TheSims.png";
import Fifa from "./images/Fifa.png";
import Battlefield from "./images/Battlefield.png"
import LostInRandom from "./images/LostInRandom.png"
import StarWars from "./images/StarWars.png"
import WayOut from "./images/WayOut.png"
import Menu from "./Menu";

export default function Home () {

    return(
        <Container>
            <Menu/>
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
                    <Link to="/sports">
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
                    <Link to="/action">
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