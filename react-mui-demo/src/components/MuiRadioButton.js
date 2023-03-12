import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"


export const MuiRadioButton = () => {
  return (
    <Box>
        <FormControl>
            <FormLabel
            id="job-experience-group-label"
            >
                Years of experience
            </FormLabel>
            <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            >
                <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
                <FormControlLabel control={<Radio />} label="0-4" value="0-4" />
                <FormControlLabel control={<Radio />} label="0-4" value="0-10" />
            </RadioGroup>
        </FormControl>
    </Box>
  )
}
