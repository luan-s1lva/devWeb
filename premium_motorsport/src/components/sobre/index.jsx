import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Box,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SobrePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("/src/imgs/bg-about.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          backgroundColor: "white",
          borderRadius: 2,
          maxWidth: 600,
          mx: "auto",
          p: 1.8,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(to right, #293744, #415160, #657A91)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Nossos Colaboradores
        </Typography>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        {[
          {
            nome: "João Quintiliano",
            perfil: "joao.jpg",
            linkedinLink:
              "https://www.linkedin.com/in/jo%C3%A3o-quintiliano-b8560321b/",
            githubLink: "https://github.com/JoaoQuintiliano",
          },
          {
            nome: "Luan Silva",
            perfil: "luan.jpeg",
            linkedinLink: "https://www.linkedin.com/in/luan-silva-25303821a/",
            githubLink: "https://github.com/luan-s1lva",
          },
        ].map((pessoa) => (
          <Grid item xs={12} md={6} key={pessoa.nome}>
            <Card sx={{ maxWidth: 250, m: 4 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={`/src/imgs/${pessoa.perfil}`}
                  alt={`Foto de ${pessoa.nome}`}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    fontWeight="bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {pessoa.nome}
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    Desenvolvedor Web
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  color="primary"
                  component="a"
                  href={`${pessoa.linkedinLink}`}
                  target="_blank"
                >
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </Button>
                <Button
                  size="small"
                  sx={{ color: "purple" }}
                  component="a"
                  href={`${pessoa.githubLink}`}
                  target="_blank"
                >
                  <GitHubIcon sx={{ fontSize: 40 }} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
