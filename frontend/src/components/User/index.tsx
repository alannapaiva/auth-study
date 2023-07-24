import { Box, Button, Typography } from "@mui/material";
import { iUser } from "@/config/types";

interface UserProps {
  id?: number;
  name: string;
  email: string;
  handleRemove: (id: number | undefined | iUser) => void;
}

export const User = ({ id, name, email, handleRemove }: UserProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: 18, fontWeight: 600 }}>{name}</Typography>
      <Typography sx={{ fontSize: 14, fontWeight: 400, fontStyle: "italic" }}>
        {email}
      </Typography>
      <Button
        sx={{ background: "#ff0026", color: "#fff" }}
        onClick={() => handleRemove(id)}
      >
        Remover
      </Button>
    </Box>
  );
};
