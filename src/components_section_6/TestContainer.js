import React from 'react';
import { 
    Container, 
    // CssBaseline, 
    // Box 
} from '@mui/material';

const TestContainer = () => {
    return (
        <>
            <Container sx={{ background: "green" }} maxWidth="xs">
                This is a test container for xs
            </Container>
        <br />  
            <Container sx={{ background: "blue" }} maxWidth="sm">
                This is a test container for sm
            </Container>
        <br />
            <Container sx={{ background: "orange" }} maxWidth="md">
                This is a test container for md
            </Container>
        <br />
            <Container sx={{ background: "green" }} maxWidth="lg">
                This is a test container for lg
            </Container>
        <br />
            <Container sx={{ background: "green" }} maxWidth="xl">
                This is a test container for xl
            </Container>
        </>
    );
}

export default TestContainer;