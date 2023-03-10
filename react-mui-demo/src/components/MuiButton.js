import { Button, Stack } from "@mui/material";

function MuiButton() {
    return (
        <>
            <Stack spacing={4}>
                {/* Création de boutons */}
                <Stack spacing={2} direction="row">
                    <Button variant="text" href="https://google.com">Text</Button> {/* lien à travers le bouton */}
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>

                {/* Boutons colorés */}
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="primary">Primary</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    <Button variant="contained" color="error">Error</Button>
                    <Button variant="contained" color="info">Info</Button>
                    <Button variant="contained" color="warning">Warning</Button>
                    <Button variant="contained" color="success">Success</Button>
                </Stack>

                {/* Taille de boutons */}
                <Stack display="block" spacing={2} direction="row">
                    <Button variant="contained" size="small">Small</Button>
                    <Button variant="contained" size="medium">Medium</Button>
                    <Button variant="contained" size="large">Large</Button>
                </Stack>
            </Stack>
        </>
    );
}

export default MuiButton;