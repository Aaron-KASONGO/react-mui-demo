import { Box, Stack, Divider, Grid, Paper } from "@mui/material"

// Le layout Stack est un layout que l'on définit sur une dimension(verticalement ou horizontalement)
// Elle peut prendre comme valeur de propriété(direction='column|column-reverse|row|row-reverse')

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={4}>
      <Stack
        sx={{ border: '1px solid'}}
        direction='row'
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/* on peut utiliser la propriété sx pour définir certains styles */}
        <Box
        sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            width: '100px',
            height: '100px',
            padding: '16px',
            '&:hover': {
                backgroundColor: 'primary.light'
            }
        }}
        >
            Convolution
        </Box>
        <Box
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
        >
            Convolution
        </Box>
      </Stack>

      {/* En mettant à un breakpoint la valeur 'auto', le container ne prendra que l'espace du contenant */}
      {/* 
      le grid est divisé en 12
      Il existe
        - xs: pour le mobile
        - sm: tablette
        - md: pour desktop
        - lg et xl: pour plus grand
       */}
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
