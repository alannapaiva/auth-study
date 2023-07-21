import { useState, useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "@/contexts/user";
import { iUser } from "@/config/types";

import { PageRoutes } from "@/pages";

export const LoginAdmin = () => {
  const {setUser, setUserLogging, adminLogging ,setAdminLogging} = useContext(UserContext);
  const [adminLogged, setAdminLogged] = useState<iUser>({email: "", password: "", admin: true, name: "" });

  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAdminLogged((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const response = fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminLogged),
      }).then((response) => response.json())
      .then((userLogged) => {
        if (userLogged) {  
          setAdminLogged(userLogged);
          alert("Bem vindo(a),"+userLogged.name+"!"); 
          window.location.href = "/dashboard"
        }
        setUser(userLogged);
        console.log("Usuario: ", userLogged)
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
      <Typography sx={{ fontSize: 26, textAlign: "center", }}>
        Entre ou crie uma nova conta de administrador
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          type="email"
          name="email"
          onChange={handleInputData}
          value={adminLogged.email}
          placeholder="informe seu email"
        />
        <TextField
          type="password"
          name="password"
          onChange={handleInputData}
          value={adminLogged.password}
          placeholder="informe sua senha"
        />
        <Button onClick={handleLogin}>Log IN</Button>
      </Box>
      <Typography>
        Caso não tenha um conta, basta{" "}
        <Link to={PageRoutes.signinAdmin}>Cadastrar-se</Link>.
      </Typography>
    </Box>
  );
};
