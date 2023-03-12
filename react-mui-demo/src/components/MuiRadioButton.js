import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from "@mui/material"
import { useState } from "react";

export const MuiRadioButton = () => {
    const [years, setYears] = useState('');

    const handleYearsChange = (event) => {
        setYears(event.target.value)
    }

  return (
    <Box>
        <FormControl error={!years}>
            <FormLabel
            id="job-experience-group-label"
            >
                Years of experience
            </FormLabel>
            <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={years}
            onChange={handleYearsChange}
            row
            >
                <FormControlLabel control={<Radio size="small" color="secondary" />} label="0-2" value="0-2" />
                <FormControlLabel control={<Radio />} label="0-4" value="0-4" />
                <FormControlLabel control={<Radio />} label="0-4" value="0-10" />
            </RadioGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
    </Box>
  )
}
