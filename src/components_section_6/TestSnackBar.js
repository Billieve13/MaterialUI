import React, { useState } from 'react';
import { Snackbar, Button, Box, Alert } from '@mui/material';

const TestSnackBar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <Box>
                <Snackbar
                    onClick={() => setOpen(false)}  
                    autoHideDuration={2000}
                    open={open}>
                        <Alert severity="success">This is a success message</Alert>
                </Snackbar>
            </Box>
        </div>
    );
}

export default TestSnackBar;