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
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SearchIcon from "@mui/icons-material/Search";
import "../../index.css";
import fundo from "../../imgs/bg-img.jpg";

export default function HomePage() {
  const [carData, setCarData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Ainda necessário para manter o controle da barra

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((response) => response.json())
      .then((json) => {
        setCarData(json);
      });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${fundo})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        pb: 5,
      }}
    >
      <Box
        sx={{
          py: 5,
          mb: 4,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          {/* <Avatar
            sx={{
              mx: "auto",
              mb: 2,
              bgcolor: "#fff",
              color: "#1976d2",
              width: 64,
              height: 64,
            }}
          >
            <DirectionsCarIcon fontSize="large" />
          </Avatar>*/}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: "white",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Experimente o Luxo
          </Typography>

          <Typography variant="subtitle1" color="white">
            Confira nossa coleção de carros luxuosos
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md">
        {/* Campo de busca (somente visual) */}
        <Box sx={{ mb: 4, background: "white", borderRadius: "7px" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Buscar por marca ou modelo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Mantém o controle do campo, mas não filtra
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Tabela de carros */}
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
              </TableRow>
            </TableHead>
            <TableBody>
              {carData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <Typography fontWeight="medium">{row.brand}</Typography>
                  </TableCell>
                  <TableCell align="center">{row.model}</TableCell>
                  <TableCell align="center">{row.year}</TableCell>
                  <TableCell align="center">
                    ${row.price.toLocaleString()}
                  </TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
