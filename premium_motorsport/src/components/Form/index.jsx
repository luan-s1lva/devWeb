import {
  Box,
  Card,
  FormGroup,
  FormControl,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function Form({
  toStore,
  formData,
  handleSubmit,
  handleChange,
  handleUpdate,
}) {
  return (
    <Box
      sx={{
        background: "whitesmoke",
        maxWidth: 650,
        borderRadius: 2,
        mx: "auto",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "500px", margin: "auto", padding: "15px" }}
      >
        <Grid size={12} sx={{ textAlign: "center" }}>
          <h1>Cadastro de Veículo</h1>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormGroup>
            <FormControl>
              <TextField
                name="marca"
                id="filled-basic"
                required
                label="Marca"
                variant="filled"
                value={formData.marca}
                onChange={handleChange}
              />
            </FormControl>
          </FormGroup>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormGroup>
            <FormControl>
              <TextField
                name="modelo"
                id="filled-basic"
                required
                label="Modelo"
                variant="filled"
                value={formData.modelo}
                onChange={handleChange}
              />
            </FormControl>
          </FormGroup>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormGroup>
            <FormControl>
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
            </FormControl>
          </FormGroup>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormGroup>
            <FormControl>
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
            </FormControl>
          </FormGroup>
        </Grid>

        <Grid size={12}>
          <FormGroup>
            <FormControl>
              <TextField
                name="imagem"
                id="filled-basic"
                required
                label="Imagem"
                variant="filled"
                value={formData.imagem}
                onChange={handleChange}
              />
            </FormControl>
          </FormGroup>
        </Grid>

        <Grid size={12}>
          <FormGroup>
            <FormControl>
              <TextField
                name="descricao"
                id="filled-basic"
                required
                multiline
                rows={5}
                label="Descrição"
                variant="filled"
                value={formData.descricao}
                onChange={handleChange}
              />
            </FormControl>
          </FormGroup>
        </Grid>

        <Grid sx={{ mx: "auto" }}>
          {toStore === true ? (
            <Button variant="contained" onClick={handleSubmit}>
              STORE
            </Button>
          ) : (
            <Button variant="contained" onClick={handleUpdate}>
              UPDATE
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
