import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Drawer, Box } from "@mui/material";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export const MuiNavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                <CatchingPokemonIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ marginRight: 'auto' }}>
                POKEMONAPP
            </Typography>
            <Stack direction="row" display={{ xs: 'none', sm: 'block'}} spacing={2}>
                <Button color="inherit">Features</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Login</Button>
            </Stack>
            <Box color='inherit' display={{ sm: 'none'}}>
                <IconButton  size="large" color="inherit" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
            display={{ sm: 'none' }}
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width="250px" height='100%' color='white' bgcolor='primary.light' textAlign="center" role="prensentation">
                    <Typography variant="h6" component="div">
                        Side Panel
                    </Typography>
                    <Stack direction="column" spacing={2}>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Pricing</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Login</Button>
                    </Stack>
                </Box>
            </Drawer>
        </Toolbar>
    </AppBar>
  )
}
