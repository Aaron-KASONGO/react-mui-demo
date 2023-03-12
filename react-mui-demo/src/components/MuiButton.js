import { useState } from "react";
import { Button, ButtonGroup, IconButton, Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


function MuiButton() {
    const [formats, setFormats] = useState(null);

    const handlingChangeFormats = (event, update) => {
        setFormats(update)
    }

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

                {/* Icon dans un bouton( avant ou après le texte) */}
                <Stack spacing={2} direction="row">
                    <Button variant="contained" startIcon={<SendIcon />} disableElevation>Send start</Button>
                    <Button variant="contained" endIcon={<SendIcon />} disableRipple>Send end</Button>

                    {/* Icon seule comme bouton */}
                    <IconButton aria-label="Send" color="secondary">
                        <SendIcon />
                    </IconButton>
                </Stack>

                {/* Groupe de boutons */}
                <Stack direction="row">
                    <ButtonGroup
                    orientation="vertical"
                    variant="contained"
                    color="secondary"
                    size="small"
                    aria-label="groupe boutons"
                    >
                        <Button>Start</Button>
                        <Button>Center</Button>
                        <Button>End</Button>
                    </ButtonGroup>
                </Stack>

                {/* Toggle boutons */}
                <Stack direction="row">
                    <ToggleButtonGroup 
                    aria-label="Format Group"
                    value={formats}
                    onChange={handlingChangeFormats}
                    size="small"
                    orientation="vertical"
                    color="success"
                    exclusive
                    >
                        <ToggleButton value="bold" aria-label="Bold Formal">
                            <FormatBoldIcon />
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label="Italic Formal">
                            <FormatItalicIcon />
                        </ToggleButton>
                        <ToggleButton value="underlined" aria-label="Underlined Formal">
                            <FormatUnderlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </>
    );
}

export default MuiButton;