import { Avatar, Stack, AvatarGroup } from "@mui/material"

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={1}>
            <Avatar sx={{ bgcolor: 'primary.light'}}>KM</Avatar>
            <Avatar sx={{ bgcolor: 'success.light'}}>WK</Avatar>
        </Stack>

        {/* Avec des images de profil */}
        <Stack direction="row" spacing={1}>
            <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="John Doe"
            />
            <Avatar
            src="https://randomuser.me/api/portraits/men/80.jpg"
            alt="John Doe"
            />
        </Stack>

        {/* Groupe d'avatar */}
        <Stack direction="row" spacing={1}>
            <AvatarGroup max={3}>
                <Avatar sx={{ bgcolor: 'primary.light'}}>KM</Avatar>
                <Avatar sx={{ bgcolor: 'success.light'}}>WK</Avatar>
                <Avatar
                src="https://randomuser.me/api/portraits/women/79.jpg"
                alt="John Doe"
                />
                <Avatar
                src="https://randomuser.me/api/portraits/men/80.jpg"
                alt="John Doe"
                />
            </AvatarGroup>
        </Stack>

        {/* Changer de taille et de style */}
        <Stack direction="row" spacing={1}>
            <Avatar variant="square" sx={{ bgcolor: 'primary.light', width: 48, height: 48}}>KM</Avatar>
            <Avatar variant="rounded" sx={{ bgcolor: 'success.light', width: 48, height: 48}}>WK</Avatar>
            <Avatar
            sx={{ width: 48, height: 48}}
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="John Doe"
            />
            <Avatar
            sx={{ width: 48, height: 48}}
            src="https://randomuser.me/api/portraits/men/80.jpg"
            alt="John Doe"
            />
        </Stack>
    </Stack>
  )
}
