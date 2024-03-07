import React from "react";
import { 
    AppBar, 
    Button, 
    Toolbar, 
    Typography 
} from "@mui/material";

const TestHeader = () => {
    return (
        <>
        <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h6">Go Bills!</Typography>
                <Button variant="contained"
                    sx={{marginLeft: "auto"}} 
                    color="warning">Login
                </Button>
            </Toolbar>
        </AppBar>
        </div>
        </>
    );
}

export default TestHeader;