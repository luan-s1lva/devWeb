import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Avatar,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../../index.css";

export default function TabelaCarros({ detectUpdate, showActions }) {
  const [carData, setCarData] = useState([]);
  const [carDataDisplay, setCarDataDisplay] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((response) => response.json())
      .then((json) => {
        setCarData(json);
        setCarDataDisplay(json);
      });
  }, []);

  function handleFiltering(value) {
    carData.filter((item) => {
      if (
        item.marca.toLowerCase().includes(value) ||
        item.modelo.toLowerCase().includes(value)
      ) {
        setCarDataDisplay([item]);
      }

      if (value == "") {
        setCarDataDisplay(carData);
      }
    });
  }

  return (
    <>
      <Box sx={{ mb: 4, background: "white", borderRadius: "7px" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar por marca ou modelo..."
          onChange={(e) => handleFiltering(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          overflowX: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="car table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Marca
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Modelo
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Ano
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Preço
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Descrição
              </TableCell>
              {showActions ?
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Ações
              </TableCell>
              :
              <></>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {carDataDisplay.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#f0f0f0" },
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  <Typography fontWeight="medium">{row.marca}</Typography>
                </TableCell>
                <TableCell align="center">{row.modelo}</TableCell>
                <TableCell align="center">{row.ano}</TableCell>
                <TableCell align="center">
                  ${Number.parseInt(row.preco).toLocaleString()}
                </TableCell>
                <TableCell align="center">{row.descricao}</TableCell>
                {showActions ? 
                <TableCell align="center">
                  <button type="button" onClick={() => detectUpdate(row)}>
                    EDITAR
                  </button>
                  <button type="button">DELETAR</button>
                </TableCell>
                :
                <></>
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
