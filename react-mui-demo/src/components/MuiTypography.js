import { Typography } from '@mui/material'

export const MuiTypography = () => {
    return (
        <>
        {/* Les Header */}
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4' component='h1' gutterBotom>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>
            
            {/* Les sous-titres */}

            <Typography variant='subtitle1'>Subtitle 1</Typography>
            <Typography variant='subtitle2'>Subtitle 2</Typography>

            {/* Corps de texte */}

            <Typography variant='body1'>Texte body 1</Typography>
            <Typography variant='body1'>Texte body 2</Typography>

        </>
    )
}