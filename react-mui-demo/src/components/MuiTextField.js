import React from 'react'
import { useState } from 'react'
import { InputAdornment, Stack, TextField } from '@mui/material'

export const MuiTextField = () => {
    const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
            <TextField label='Name' variant='outlined' />
            <TextField label='Name' variant='filled' />
            <TextField label='Name' variant='standard' />
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label='Small Secondary' size="small" color="secondary" />
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField
            label='Form Input'
            required
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={!value ? 'required': 'Mémorisez votre nom d\'utilisateur'}
            />
            <TextField
            label='Password'
            type='password'
            helperText='Ne pas partager son mdp'
            disabled
            />
            <TextField
            label='Read Only'
            InputProps={{ readOnly: true }}
            />
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField
            label='Amount'
            InputProps={{
                startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
            />

            <TextField
            label='Weight'
            InputProps={{
                endAdornment: <InputAdornment position='end'>kg</InputAdornment>
            }}
            />
        </Stack>
    </Stack>
  )
}
