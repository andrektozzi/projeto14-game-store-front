import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();

  async function SignUp(event) {
    event.preventDefault();

    const body = {
      name,
      email,
      password,
    };

    if(password.length < 6) {
      return alert("A senha deve ter no mínimo seis caracteres!")
    }

    if(password !== confirmPassword) {
      return alert("As senhas não conferem. Digite novamente!");
    }

    try {
      await axios.post("https://game-store-driven.herokuapp.com/signup", body);
      alert("Seu usuário foi criado com sucesso!");
      navigate("/login");
    } catch (error) {
      const message = error.response.statusText;
      alert(message);
    }
  }

    function SignUpForm() {
        return (
          <>
            <input
              type="name"
              id="name"
              value={name}
              placeholder="Insira seu nome"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Insira seu endereço de e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Insira sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirme sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">CADASTRAR</button>
          </>
        );
      }
    
      return (
        <Container>
          <h1>Game Store</h1>
          <SignupForms onSubmit={SignUp}>{SignUpForm()}</SignupForms>
          <Link to="/login">Já tem uma conta? Conectar</Link>
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

    const SignupForms = styled.form`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    `;