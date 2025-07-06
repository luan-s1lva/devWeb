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
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../index.css";

export default function TabelaCarros({
  detectUpdate,
  showActions,
  detectDeleteButtonOnClick,
  setIsUpdatable,
}) {
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
    if (value === "") {
      setCarDataDisplay(carData);
      return;
    }

    const filtered = carData.filter((item) => {
      return (
        item.marca.toLowerCase().includes(value.toLowerCase()) ||
        item.modelo.toLowerCase().includes(value.toLowerCase())
      );
    });

    setCarDataDisplay(filtered);
  }

  return (
    <>
      <Box
        sx={{
          mt: 4,
          mb: 4,
          background: "white",
          borderRadius: "7px",
          width: "80%",
          mx: "auto",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar por marca ou modelo"
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
          width: "80%",
          margin: "auto",
        }}
      >
        <Table sx={{}} aria-label="car table">
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
              {showActions ? (
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Ações
                </TableCell>
              ) : (
                <></>
              )}
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
                {showActions ? (
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        detectUpdate(row);
                        setIsUpdatable(true);
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      color="error"
                      onClick={() => detectDeleteButtonOnClick(row)}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                ) : (
                  <></>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
