import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const DataItem = () => {
    const id = useParams().id;
    console.log(id);
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://dummyjson.com/todos/${id}`)
            .then((response) => response.json())
                .then((data) => setTodos(data))
                .catch((error) => console.log(error))
            };
        fetchData();
    }, [id]);

    console.log(todos)

    return (
        todos ? <Box 
            padding={10} 
            width={'100%'}
            display={'flex'}
            flexDirection={'column'}
            margin={'auto'}
            >
            <Typography variant={'h4'}>To-Do Details</Typography>
            <Typography>ID: {todos.id}</Typography>
            <Box 
                display={'flex'}
                alignItems={'center'}
                gap={5}
            >
                <Typography>Task: {todos.todo}</Typography>
                <IconButton 
                    color={todos.completed ? "success" : "error"}>
                    {todos.completed ? <DoneAllIcon /> : 
                    <HourglassBottomIcon />}
                </IconButton>  
            </Box>
        </Box> : <Box></Box>
    )
}

export default DataItem;    