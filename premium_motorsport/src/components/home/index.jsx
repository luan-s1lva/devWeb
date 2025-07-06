import { Box, Container, Typography } from "@mui/material";
import "../../index.css";
import fundo from "../../imgs/bg-img.jpg";
import TabelaCarros from "../tabelaCarros";

export default function HomePage() {
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
      <Container>
        <TabelaCarros />
      </Container>
    </Box>
  );
}
