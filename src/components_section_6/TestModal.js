import React, { useState } from "react";
import { 
    Box,
    Modal,
    Button,
    Typography,
} from "@mui/material";

const TestModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <Box position="absolute" top="50%" left="40%">
                        <Typography>
                            This is a surprise Modal!
                        </Typography>
                        <Button variant="contained" onClick={() => setOpen(false)}>
                            Close me!
                        </Button>
                    </Box>
                </Modal>
        </div>
    )
};

export default TestModal;