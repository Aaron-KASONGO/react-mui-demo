import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"

export const MuiSelect = () => {
    const [select, setSeclect] = useState('')

    const [selectMulti, setSeclectMulti] = useState([])

    const handleSelectChange = (event) => {
        setSeclect(event.target.value)
    }

    const handleSelectMultiChange = (event) => {
        console.log(event.target.value)
        setSeclectMulti(event.target.value)
    }

  return (
    <Box width="250px">
        
        {/* Select one option with fullwidth */}
        <TextField
            label="Select Country"
            value={select}
            onChange={handleSelectChange}
            select
            fullWidth
        >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="CD">RDC</MenuItem>
        </TextField>

        {/* Select many options */}
        <TextField
            label="Select Countries"
            value={selectMulti}
            onChange={handleSelectMultiChange}
            select
            fullWidth
            SelectProps={{
                multiple: true,
            }}
            size='small'
            color="secondary"
            error={!selectMulti.length}
            helperText={!selectMulti.length ? "Vous devez renseigner ce champ": "Vous pouvez renseigner plusieurs"}
        >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="CD">RDC</MenuItem>
        </TextField>
    </Box>
  )
}
