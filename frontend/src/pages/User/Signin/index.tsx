import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { iUser } from "@/config/types";
import { PageRoutes } from "@/pages";

export const SigninUser = () => {
  const [newUser, setNewUser] = useState<iUser>({ name: "", admin: false, email: "", password: ""});
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setNewUser((prevUser) => ({...prevUser, [name]: value}))
  };

  const handleSignin = async () => {
    console.log("dados do novo usuario:", newUser)
    if (newUser.password !== passwordConfirmation) {
      console.error('A senha e a confirmação de senha não correspondem');
      alert('A senha e a confirmação de senha não correspondem');
      return;
    } else {
        try {
          const response = fetch("http://localhost:5000/users", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newUser),
          });

          if (response.ok) {
            const userData = response.json();
          } else {
            console.error("erro de cadastro!!!")
          }
        } catch(error) {
          console.log("Erro!!!", error);
        };
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
      <Typography sx={{ fontSize: 26 }}>Cadastre-se</Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputData}
          placeholder="informe seu nome"
        />
        <TextField
          type="email"
          name="email"
          onChange={handleInputData}
          value={newUser.email}
          placeholder="informe seu email"
        />
        <TextField
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleInputData}
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
        Caso já tenha uma conta, basta <Link to={PageRoutes.login}>Logar</Link>.
      </Typography>
    </Box>
  );
};
