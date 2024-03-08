import React from 'react';
import { GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const DataGridToolbar = () => {
    return (
        <Box display="flex" gap={3} margin={1}>
            <GridToolbarExport />
            <GridToolbarFilterButton />
            <GridToolbarQuickFilter />
        </Box>
    )
}

export default DataGridToolbar;