import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function HomePage() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((response) => response.json())
      .then((json) => {
        setCarData(json);
      });
  }, []);

  return (
    <>
      <Grid container spacing={3} alignItems="center" sx={{ mb: 3 }}>
        <Grid item size={5}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Car Inventory
          </Typography>
        </Grid>
        <Grid item size={7}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Procurar carros..."
            variant="standard"
            sx={{ fontSize: "1rem" }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TableContainer
            component={Paper}
            sx={{ borderRadius: 2, boxShadow: 3 }}
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
                      "&:hover": { backgroundColor: "#f9f9f9" },
                    }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      <Typography fontWeight="medium">{row.brand}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>{row.model}</Typography>
                    </TableCell>
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
        </Grid>
      </Grid>
    </>
  );
}
