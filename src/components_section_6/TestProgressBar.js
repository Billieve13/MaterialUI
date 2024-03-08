import React from 'react';
import {
    ProgressBar,
    ProgressBarVariant,
    Box,
    CircularProgress,
    LinearProgress,
} from "@mui/material";

const TestProgressBar = () => {
    return (
        <Box>
            <CircularProgress color="secondary" variant="determinate" value={50} />
            <LinearProgress variant='determinate' value={55}/>
        </Box>

    )
}

export default TestProgressBar;