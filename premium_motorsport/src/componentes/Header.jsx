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
  Divider,
  List,
} from "@mui/material";

export default function Header() {
  const [openDrawer, setOpen] = React.useState(true);

  return (
    <>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpen(false)}>
        <Box p={2} width="250px" textAlign="center" role="presentation" >
          <Typography variant="h6" component='div'>Menu</Typography>
          <List>
            <ListItem divider button>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem divider button>
              <ListItemText>Admin</ListItemText>
            </ListItem>
            <ListItem divider button>
              <ListItemText>Sobre nós</ListItemText>
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
            <Button color="inherit">Home</Button>
            <Button color="inherit">Admin</Button>
            <Button color="inherit">Sobre Nós</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
