import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Drawer,
  ListItem,
  ListItemText,
  List,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";

export default function Header() {
  const [openDrawer, setOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // md = <960px
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!openDrawer);
  };

  return (
    <>
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}>
        <Box
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
          sx={{
            backgroundColor: "#000",
            height: "100%",
            color: "#fff",
          }}
        >
          <Typography variant="h6" component="div">
            Menu
          </Typography>
          <List>
            <ListItem
              divider
              button
              sx={{
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              divider
              button
              sx={{
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
              onClick={() => {
                navigate("/admin");
                setOpen(false);
              }}
            >
              <ListItemText primary="Admin" />
            </ListItem>
            <ListItem
              divider
              button
              sx={{
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
              onClick={() => {
                navigate("/sobre");
                setOpen(false);
              }}
            >
              <ListItemText primary="Sobre nós" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Premium MotoSport
            </Typography>

            {!isSmallScreen && (
              <>
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate("/");
                    setOpen(false);
                  }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate("/admin");
                    setOpen(false);
                  }}
                >
                  Admin
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    navigate("/sobre");
                    setOpen(false);
                  }}
                >
                  Sobre Nós
                </Button>
              </>
            )}

            {isSmallScreen && (
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
