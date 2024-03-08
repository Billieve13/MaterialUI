import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Data from './Data';
import DataItem from './DataItem';
import { Routes, Route } from 'react-router-dom';

    function DataGridProject(){
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Data />} />
                    <Route path="/:id" element={<DataItem />} />
                </Routes>
            </div>
        )
    }

export default DataGridProject;