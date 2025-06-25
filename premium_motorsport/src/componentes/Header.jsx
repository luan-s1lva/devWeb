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

export default function Header() {
  const [openDrawer, setOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // md = <960px

  const handleDrawerToggle = () => {
    setOpen(!openDrawer);
  };

  return (
    <>
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}>
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Menu
          </Typography>
          <List>
            <ListItem divider button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem divider button>
              <ListItemText primary="Admin" />
            </ListItem>
            <ListItem divider button>
              <ListItemText primary="Sobre nós" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#2C2C2C" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Premium MotoSport
            </Typography>

            {!isSmallScreen && (
              <>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Admin</Button>
                <Button color="inherit">Sobre Nós</Button>
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
