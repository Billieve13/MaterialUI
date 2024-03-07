import React from 'react';
import { Link } from '@mui/material';

const TestLink = () => {
    return (
        <div>
            <Link 
                variant="h5"
                color="primary"
                underline="hover" 
                href="https://www.google.com">Visit Google
            </Link>
        </div>
    )
}

export default TestLink;