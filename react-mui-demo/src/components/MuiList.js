import { Stack,Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from "@mui/material"

import MailIcon from '@mui/icons-material/Mail';


export const MuiList = () => {
  return (
    <Stack direction="row" spacing={2}>
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
            <List>
                <ListItem>
                    <ListItemText primary="List item 1" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="List item 2" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="List item 3" />
                </ListItem>
            </List>

            {/* Pour mettre des icones à côté */}
            <List>
                <ListItem>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="List item 1" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="List item 2" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="List item 3" />
                </ListItem>
            </List>
        </Box>
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
            

            {/* Pour mettre des icones d'avatar à côté */}
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="List item 1" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="List item 2" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="List item 3" />
                </ListItem>
            </List>

            {/* Bouton clickable et texte secondaire */}
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary="List item 1" secondary="secondary text" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary="List item 2" secondary="secondary text" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary="List item 3" secondary="secondary text" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Stack>
  )
}
