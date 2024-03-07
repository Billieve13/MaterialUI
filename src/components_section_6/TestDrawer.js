import React, { useState } from "react";
import { 
    Drawer,
    List,
    ListItem,
    Box,
    ListItemText,
    ListItemButton,
    Button,
    Divider,
} from "@mui/material";

const arrayOptions = [
    "Home",
    "About",
    "Services",
    "Contact",
]

const TestDrawer = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box>
            <Button onClick={() => setOpen(true)}>Open</Button>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    {arrayOptions.map((element) => (
                        <ListItemButton onClick={() => setOpen(false)}>
                            <ListItemText primary={element}/>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}

export default TestDrawer;