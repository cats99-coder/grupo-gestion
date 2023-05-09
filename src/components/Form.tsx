"use client";
import { TextField, Button } from "@mui/material";

export default function Form() {
  return (
    <form action="" className=" space-y-3 bg-white p-3 rounded-md flex flex-col">
      <TextField
        fullWidth={true}
        id="form-asunto"
        label="Asunto"
        variant="outlined"
      />
      <TextField
        fullWidth={true}
        type="email"
        id="form-email"
        label="Email"
        variant="outlined"
      />
      <TextField
        fullWidth={true}
        multiline
        id="form-mensaje"
        label="Mensaje"
        variant="outlined"
      />
      <Button variant="contained">Enviar</Button>
    </form>
  );
}
