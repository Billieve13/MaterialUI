
import { CardHeader, Card, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, Router } from 'react-router-dom';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import DataGridToolbar from './DataGridToolbar';

const columns = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 60,
        renderCell: (params) => {
            return ( 
            <Link sx={{ color: 'black', textUnderlineOffset: 5 }}to={`/${params.value}`}>
                <Typography>
                    {params.value}
                </Typography>
            </Link>
            );
        }
    },
    {
        field: 'userId',
        headerName: 'User Id',
        width: 70,
        editable: true,
    },
    {
        field: 'todo',
        headerName: 'To-Do',
        width: 500,
        editable: true,
    },
    {
        field: 'completed',
        headerName: 'Completed',
        width: 80,
        editable: true,
        renderCell: (params) => {
            return params.value ? <AssignmentTurnedInRoundedIcon sx={{ color: 'green' }}/>
                : <AssignmentLateIcon sx={{color: 'orange'}}/>;
        }
    },
    
];

const Data = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            await fetch("https://dummyjson.com/todos")
            .then((response) => response.json())
                .then((data) => setTodos(data.todos))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
            };
        fetchData();
    }, []);

    console.log(todos);

    return (
        <Card sx={{ padding: 5 }}>
            <CardHeader title="Todo List"></CardHeader>
            <DataGrid 
                checkboxSelection
                rowsperPageOptions={[5, 10, 20, 30]}
                    pageSize={5}
                components={{Toolbar: DataGridToolbar, }}
                loading={loading} 
                sx={{ height: 500 }}
                rows={todos} 
                columns={columns} 
                componentsProps={{
                    baseButton: {
                        variant: 'outlined',
                        color: 'primary',
                    },
                }}
            />
        </Card>
    )
}

export default Data;