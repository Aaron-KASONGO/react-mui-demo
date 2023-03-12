import { Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react'

export const MuiRating = () => {
    const [value, setValue] = useState(null);
    const [favorite, setFavorite] = useState(null);
    console.log({favorite})

    const handleValueChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleFavoriteChange = (event, newValue) => {
        setFavorite(newValue);
    }

  return (
    <Stack spacing={4}>
        <Stack spacing={2}>
            <Rating
            value={value}
            onChange={handleValueChange}
            precision={0.5}
            />
        </Stack>

        {/* Avec une icone personnalisée */}
        <Stack spacing={2}>
            <Rating
            value={favorite}
            onChange={handleFavoriteChange}
            precision={0.5}
            icon={<FavoriteIcon fontSize='inherit' color='error' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
            />
        </Stack>

        {/* En lecture seule */}
        <Stack spacing={2}>
            <Rating
            value={favorite}
            onChange={handleFavoriteChange}
            precision={0.5}
            icon={<FavoriteIcon fontSize='inherit' color='error' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
            readOnly
            />
        </Stack>

        {/* Choisir un seul */}
        <Stack spacing={2}>
            <Rating
            value={favorite}
            onChange={handleFavoriteChange}
            precision={0.5}
            icon={<FavoriteIcon fontSize='inherit' color='error' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
            highlightSelectedOnly
            />
        </Stack>
    </Stack>
  )
}
