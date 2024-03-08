import React, { useState } from 'react';
import {
    Rating,
    Box,
    Typography,
} from "@mui/material";

const TestRating = () => {
    const [value, setValue] = useState();
    return (
        <Box>
            <Rating 
                size="large" 
                precision={0.1} 
                defaultValue={1.6} 
                value={value} 
                onChange={(event, value) => setValue(value)}/>
            <Typography>Rated {value !== undefined ? value : 0 } Stars</Typography>
        </Box>

    )
}

export default TestRating;