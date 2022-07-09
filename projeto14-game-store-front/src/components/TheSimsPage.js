import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Menu";
import Menu from "./Menu";
import styled from "styled-components";

export default function TheSimsPage(){

    const URL = "https://game-store-driven.herokuapp.com/products"
    const {products, setProducts} = useState([]);
    const productsList =[
        {title:"The Sims 4",
        description: " Solte a imaginação e crie um mundo de Sims que é inteiramente único. Explore e personalize cada detalhe, dos Sims às casas e muito mais. Escolha a aparência dos Sims, como eles agem e se vestem. Determine como eles vão viver a cada dia. Projete e construa casas incríveis para cada família e decore-as com seus móveis e decorações preferidos. Viaje para vizinhanças diferentes para conhecer outros Sims e saber mais sobre suas vidas. Descubra locais belíssimos com ambientes distintos e parta em aventuras espontâneas. Gerencie os altos e baixos das vidas dos Sims e veja o que acontece quando você joga cenários realistas ou fantásticos. Conte suas histórias do seu jeito, desenvolvendo relacionamentos, seguindo carreiras e aspirações de vida e envolvendo-se em um jogo extraordinário, onde as possibilidades são infinitas.",
        urlImage: "https://cdn.mcr.ea.com/3/images/a4bc5ddb-cbef-46b8-affd-3066e2402a6c/1587505505-0x0-0-0.jpg",
        category: "thesims",
        price: 79.00
        },
        {title:"The Sims 4 - Vida no Ensino Médio ",
        description: " Seja um estudante nota 10 (ou 0), entre em um clube e aproveite a juventude ao máximo com The Sims 4 Pacote de Expansão Vida no Ensino Médio! Viva experiências marcantes da adolescência, como participar do baile, aprontar travessuras, criar identidades e modas e formar amizades e rivalidades em eventos extracurriculares. Há muita coisa a se fazer antes da formatura – Sims adolescentes podem comparecer à aula, interagir com os professores e até lucrar como influenciadores de estilo ou streamers!",
        urlImage: "https://www.alalasims.com/noticias/wp-content/uploads/2022/06/ep12-depop.png",
        category: "thesims",
        price: 199.00
        },
        {title:"The Sims 4 - LobiSims",
        description: " Uive para a noite no The Sims 4 Pacote de Jogo LobiSims. Seus Sims se transformarão, entrarão para matilhas e estarão à solta sob a luz da lua cheia. Explore o mundo de Moonwood Mill e descubra os segredos dos lobisomens em sua nova vida lupina. Os Sims desbloquearão habilidades novas, terão temperamentos únicos e talvez até encontrem um par destinado.",
        urlImage: "https://www.gamersegames.com.br/wp-content/uploads/2022/06/the-sims-4-werewolves.webp",
        category: "thesims",
        price: 89.00
        }
    ]

    useEffect(() => {

        async function fetchData(){
            try {
    
                const games = await axios.get(URL);
    
                console.log(games);
                console.log(games.filter(e => e.category === "thesims"));
                setProducts();
                
            } catch (error) {
                console.log(error.response);
            }
        }

        fetchData();
    }, [])

    function renderGames(){

        return(
            <>
            {productsList.map(e => <Game title = {e.title} description = {e.description} urlImage = {e.urlImage} price = {e.price}/>)}
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

