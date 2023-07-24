/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { UserContext } from "@/contexts/user";
import { iUser } from "@/config/types";

export const Home = () => {
  const [acessed, setAcessed] = useState(0);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { user, setUser, userLogging, setUserLogging } =
    useContext(UserContext);
  const [userLogged, setUserLogged] = useState<iUser>({
    email: user.email,
    password: user.password,
    admin: false,
    name: user.name,
  });

  const handleLogOut = () => {
    setAcessed(1);
    setUserLogging(false);
  };

  const handleDelete = () => {
    try {
      if (userLogged.password === passwordConfirmation) {
        const response = fetch(`http://localhost:5000/users/${user.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userLogged),
        });
        alert("usuário deletado");
        setUserLogging(false);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserLogged((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = () => {
    try {
      if (userLogged.password === passwordConfirmation) {
        const response = fetch(`http://localhost:5000/users/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userLogged),
        }).then((response) => response.json());
        alert("Os dados foram atualizados!");
        console.log(userLogged);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  if (userLogging == false || user.admin == true) {
    window.location.href = "/";
    if (acessed == 0) {
      alert("Erro! Faça login novamente!");
    }
    return;
  }

  return (
    <Box sx={{ width: 500, margin: "20px auto" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: 26 }}>Bem-vindo, visitante.</Typography>
        <Button
          sx={{ background: "#eb2142", color: "#fff" }}
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          type="text"
          name="text"
          onChange={handleInputData}
          value={userLogged.name}
          placeholder="informe seu nome"
        />
        <TextField
          type="email"
          name="email"
          onChange={handleInputData}
          value={userLogged.email}
          placeholder="informe seu email"
        />
        <TextField
          type="password"
          onChange={handleInputData}
          value={userLogged.password}
          placeholder="informe sua senha"
        />
        <TextField
          type="password"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          value={passwordConfirmation}
          placeholder="confirme sua senha"
        />
        <Button
          sx={{ background: "#21eb4d", color: "#fff" }}
          onClick={handleUpdate}
        >
          Atualizar
        </Button>
        <Button
          sx={{ background: "#ff0026", color: "#fff" }}
          onClick={handleDelete}
        >
          Excluir Usuário
        </Button>
      </Box>
    </Box>
  );
};
