import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { PageRoutes } from "@/pages";

export const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

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
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="informe seu email"
        />
        <TextField
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
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
