import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Collapse } from '@mui/material';

const array = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth"
]

const TestList = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box>
            <List>
                <ListItem divider>
                    <ListItemButton onClick={() => setOpen(true)}>
                        <ListItemIcon>{ ">" }</ListItemIcon>
                        <ListItemText primary={"Expand List"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Collapse in={open}>
            <List sx={{ marginLeft: 25 }}>
                {array.map((listElement) => (
                    <ListItem divider>
                        <ListItemButton onClick={() => setOpen(false)}>
                            <ListItemText primary={listElement} />
                        </ListItemButton>
                    </ListItem>              
                ))}
            </List>
            </Collapse>
        </Box>
    );
};

export default TestList;