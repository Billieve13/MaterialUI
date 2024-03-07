import React, { useState } from "react";
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

const TestDialog = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog hideBackdrop open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Surprise!!</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                This is a surprise dialog.
                            </DialogContentText>
                        </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={() => setOpen(false)}>Did this scare you?</Button>
                    </DialogActions>
                </Dialog>
        </div>
    )
};

export default TestDialog;