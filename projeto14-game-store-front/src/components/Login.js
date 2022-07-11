import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    async function AddLogin(event) {
        event.preventDefault();

        const body = {
            email,
            password
        };

        try {
            const response = await axios.post("https://game-store-driven.herokuapp.com/login", body);
            const { name, email, token } = response.data;

            setUser({
                name,
                email,
                token
            });

            navigate("/");
        } catch (error) {
            const message = error.response.statusText;
            alert(message);
        }
    }

    function LoginForm() {
        return (
            <>
                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">CONECTAR</button>
            </>
        );
    }

    return (
        <Container>
            <h1>Game Store</h1>
            <LoginForms onSubmit={AddLogin}>{LoginForm()}</LoginForms>
            <Link to="/signup">Chegando agora? Crie uma Conta Game Store</Link>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Lexend Deca", sans-serif;
  height: 100vh;
  padding: 25px;
`;

const LoginForms = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;