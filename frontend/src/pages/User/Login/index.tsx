import { useState, useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { PageRoutes } from "@/pages";
import { iUser } from "@/config/types";
import { UserContext } from "@/contexts/user";

export const LoginUser = () => {
  const {setUser, userLogging, setUserLogging} = useContext(UserContext);
  const [userLogged, setUserLogged] = useState<iUser>({email: "", password: "", admin: false, name: "" });
  
  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserLogged((prevUser) => ({ ...prevUser, [name]: value }));
  };
  
  const handleLogin = async () => {
    try {
      const response = fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogged),
      }).then((response) => response.json())
      .then((userLogged) => {
        if (userLogged) 
        setUserLogging(true);
        alert("Bem vindo(a) de volta!");
        window.location.href = "/home";
      });

    } catch (error) {
      console.error("Erro:", error);
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
        Entre em sua conta ou cadastre-se
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          type="email"
          name="email"
          onChange={handleInputData}
          value={userLogged.email}
          placeholder="informe seu email"
        />
        <TextField
          type="password"
          name="password"
          onChange={handleInputData}
          value={userLogged.password}
          placeholder="informe sua senha"
        />
        <Button onClick={handleLogin}>Log IN</Button>
      </Box>
      <Typography>
        Caso não tenha um conta, basta{" "}
        <Link to={PageRoutes.signin}>Cadastrar-se</Link>.
      </Typography>
    </Box>
  );
};
