import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react";

const skills = ['HTML', 'CSS', 'Javascript', 'Python', 'TypeScript', 'React', 'Java']

export const MuiAutocomplete = () => {
    const [skill, setSkill] = useState(null);
    console.log(skill)

  return (
    <Stack spacing={4}>
        <Stack spacing={2} width="250px">
            <Autocomplete
            options={skills}
            renderInput={(params) => <TextField {...params} label='Skills' />}
            value={skill}
            onChange={(event, newValue) => setSkill(newValue)}
            />
        </Stack>

        {/* En mode libre(Recherche google) */}
        <Stack spacing={2} width="250px">
            <Autocomplete
            options={skills}
            renderInput={(params) => <TextField {...params} label='Skills Free' />}
            value={skill}
            onChange={(event, newValue) => setSkill(newValue)}
            freeSolo
            />
        </Stack>
    </Stack>
  )
}
