import React from "react";
import { Logociti, Mangue } from "../assets";
import { Button, TextField, Typography, Box, Container } from "@mui/material";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",

          position: "absolute",
          left: "50px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            paddingBottom: "120px",
          }}
        >
          <img src={Logociti.src} alt="Logo" />
        </div>
        <Typography
          style={{ marginBottom: "20px" }}
          color="#1E293B"
          variant="h4"
        >
          Acesse a plataforma
        </Typography>
        <p color="#475569" style={{ marginBottom: "20px" }}>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </p>
        <Typography color={"#1E293B"}>E-mail</Typography>
        <TextField
          type="text"
          placeholder="Digite seu email"
          style={{ marginTop: "20px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Typography style={{ marginTop: "20px" }} color={"#1E293B"}>
            Senha
          </Typography>
          <Button variant="text" color="success" style={{ paddingTop: "30px" }}>
            Esqueceu sua senha?
          </Button>
        </div>
        <TextField
          type="password"
          placeholder="Digite sua senha"
          style={{ marginTop: "5px" }}
        />
        <Button
          variant="contained"
          color="success"
          style={{ marginTop: "20px", height: "50px" }}
        >
          Entrar
        </Button>
      </Box>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "0",
          bottom: "0",
          top: "0",
        }}
      >
        <img src={Mangue.src} alt="Mangue" />
      </div>
    </div>
  );
}
