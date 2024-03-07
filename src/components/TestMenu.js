import React, { useState } from "react";
import { 
    Menu,
    MenuItem,
    Button,
} from "@mui/material";

const TestMenu = () => {
    const [anchorElement, setAnchorElement] = useState(null);
    const [anchorElement2, setAnchorElement2] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setAnchorElement(null);
        setOpen(false);
    }

    const handleClick = (event) => {
        setAnchorElement(event.currentTarget);
        setOpen(true);
    }

    const handleClick2 = (event) => {
        setAnchorElement2(event.currentTarget);
        setOpen(true);
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClick}>Bills FA Acquisitions</Button>
                <Menu
                    anchorEl={anchorElement}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Taylor Rapp</MenuItem>
                    <MenuItem onClick={handleClose}>David Edwards</MenuItem>
                    <MenuItem onClick={handleClose}>Matt Haack</MenuItem>
                </Menu>
                <Button onClick={handleClick2}>Bills Store</Button>
                    <Menu
                        anchorEl={anchorElement2}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>New Stuffs</MenuItem>
                        <MenuItem onClick={handleClose}>New Things</MenuItem>
                    </Menu>
        </div>
    );
}

export default TestMenu;