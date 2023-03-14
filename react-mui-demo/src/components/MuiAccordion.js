import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const MuiAccordion = () => {
  return (
    <>
        <Accordion>
            <AccordionSummary
            id='panel-header'
            aria-controls="panel-content"
            expandIcon={<ExpandMoreIcon />}
            >
                <Typography>
                    Définition du cachet
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                Petit objet gravé avec lequel on marque une empreinte, par exemple pour fermer une lettre, ou pour laisser une marque distinctive qui garantit l’authenticité du document, ou pour donner un renseignement, etc. 
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
        <AccordionSummary
        id='panel1-header'
        aria-controls="panel1-content"
        expandIcon={<ExpandMoreIcon />}
        >
            <Typography>
                Définition du cachet
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant="body2">
            Petit objet gravé avec lequel on marque une empreinte, par exemple pour fermer une lettre, ou pour laisser une marque distinctive qui garantit l’authenticité du document, ou pour donner un renseignement, etc. 
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
            <AccordionSummary
            id='panel2-header'
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
            >
                <Typography>
                    Définition du cachet
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                Petit objet gravé avec lequel on marque une empreinte, par exemple pour fermer une lettre, ou pour laisser une marque distinctive qui garantit l’authenticité du document, ou pour donner un renseignement, etc. 
                </Typography>
            </AccordionDetails>
        </Accordion>
    </>
  )
}
