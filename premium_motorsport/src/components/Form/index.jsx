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
  isUpdatable,
}) {
  return (
    <>
      {isUpdatable ? (
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
              {toStore ? (
                <h1>Cadastro de Veículo</h1>
              ) : (
                <h1>Edição de Veículo</h1>
              )}
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FormGroup>
                <FormControl>
                  <TextField
                    name="marca"
                    id="marca"
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
                    id="modelo"
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
                    id="ano"
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
                    id="preco"
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
                    name="descricao"
                    id="descricao"
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
                  Cadastrar
                </Button>
              ) : (
                <Button variant="contained" onClick={handleUpdate}>
                  Editar
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
