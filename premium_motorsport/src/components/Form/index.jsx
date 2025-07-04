import { Box, Card, TextField } from "@mui/material";
import { useState } from "react";

export default function Form({ toStore, formData, handleSubmit, handleChange, handleUpdate }) {
  return (
    <>
      <Card variant="outlined">
        <TextField
          name="marca"
          id="filled-basic"
          required
          label="Marca"
          variant="filled"
          value={formData.marca}
          onChange={handleChange}
        />
        <TextField
          name="modelo"
          id="filled-basic"
          required
          label="Modelo"
          variant="filled"
          value={formData.modelo}
          onChange={handleChange}
        />
        <TextField
          name="ano"
          id="filled-basic"
          required
          type="number"
          label="Ano"
          variant="filled"
          value={formData.ano}
          onChange={handleChange}
        />
        <TextField
          name="preco"
          id="filled-basic"
          required
          type="number"
          label="Preço"
          variant="filled"
          value={formData.preco}
          onChange={handleChange}
        />
        <TextField
          name="imagem"
          id="filled-basic"
          required
          label="Imagem"
          variant="filled"
          value={formData.imagem}
          onChange={handleChange}
        />
        <TextField
          name="descricao"
          id="filled-basic"
          required
          multiline
          rows={4}
          label="Descrição"
          variant="filled"
          value={formData.descricao}
          onChange={handleChange}
        />
        {toStore == true ? 
        <button type="button" onClick={handleSubmit}>
          STORE
        </button>
        :
        <button type="button" onClick={handleUpdate}>
          UPDATE
        </button>
        }
      </Card>
    </>
  );
}
