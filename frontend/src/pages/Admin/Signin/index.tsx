/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { PageRoutes } from "@/pages";
import { iUser } from "@/config/types";

export const SigninAdmin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [newAdmin, setNewAdmin] = useState<iUser>({ name: "", admin: true, email: "", password: ""});

    const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setNewAdmin((prevUser) => ({...prevUser, [name]: value}))
  };

  const handleSignin = async () => {
    console.log("Dados de cadastro de novo usuário:", newAdmin)
    if (newAdmin.password !== passwordConfirmation) {
      console.error('A senha e a confirmação de senha não correspondem');
      alert('A senha e a confirmação de senha não correspondem');

      return;
    } else {
        try {
          const response = await fetch("http://localhost:5000/users", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newAdmin),
          });

          if (response.ok) {
            const userData = await response.json();
          } else {
            console.error("erro no cadastro!!!")
          }
        } catch(error) {
          console.log("Erro!!!", error);
        }
        console.log("handle sign in");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "20px auto",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Typography sx={{ fontSize: 26 }}>
        Cadastre um novo administrador
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          placeholder="informe seu nome"
        />
        <TextField
          type="email"
          name="name"
          onChange={handleInputData}
          value={newAdmin.name}
          placeholder="informe seu email"
        />
        <TextField
          type="password"
          name="password"
          onChange={handleInputData}
          value={newAdmin.password}
          placeholder="informe sua senha"
        />
        <TextField
          type="password"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          value={passwordConfirmation}
          placeholder="confirme sua senha"
        />
        <Button onClick={handleSignin}>Sign IN</Button>
      </Box>
      <Typography>
        Caso já tenha uma conta, basta{" "}
        <Link to={PageRoutes.loginAdmin}>Logar</Link>.
      </Typography>
    </Box>
  );
};
