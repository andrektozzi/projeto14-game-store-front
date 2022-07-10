import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu(){

    return(
        <>
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
                <Link to="/sports">
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
                <Link to="/action">
                    <p>Ação</p>
                </Link>                      
            </Category>
        </>
    )
}

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
