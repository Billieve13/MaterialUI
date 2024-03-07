import React, { useState } from "react";
import {
    Alert,
    AlertTitle,
    CheckIcon,
    Box,
} from "@mui/material";

const TestAlert = () => {
    const [show, setShow] = useState(true);

    return (
        <div>
            <Box>
            {show && <Alert onClose={() => setShow(false)} severity="info">
                This is a filled info Alert.
            </Alert>}
            </Box>
        </div>
    );
}

export default TestAlert;