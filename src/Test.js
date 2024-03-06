import React, { useState } from "react";
import { 
    Button, 
    Typography, 
    TextField, 
    Checkbox, 
    FormGroup, 
    FormControl, 
    Select, 
    MenuItem, 
    InputLabel, 
    FormControlLabel } from "@mui/material";

const Test = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        subscribe: false,
        age: 0,
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    return (
        <>
        <div>
            <Typography variant="h5" sx={{ color: "red" }}>
                Go Bills!!!!!
            </Typography>
            <Button 
                sx={{ margin: 1.5 }}
                color="success"
                variant="contained" 
                size="small"
                onClick={() => {
                    alert('Button Clicked');
                }}
                >
                First
            </Button>
            <Button 
                sx={{ margin: 1.5 }}
                color="error"
                variant="outlined" 
                size="medium"
                onClick={() => {
                    alert('Button Clicked');
                }}
                >
                Second
            </Button>
            <Button 
                sx={{ margin: 1.5 }}
                color="info"
                variant="text" 
                size="large"
                onClick={() => {
                    alert('Button Clicked');
                }}
                >
                Third
            </Button>
        </div>
        <div>
            <form style={{display:'flex', flexDirection:'column'}}onSubmit={handleSubmit}>
            <TextField 
                name="name"
                value={inputs.name} 
                onChange={handleChange}
                type={"text"} 
                sx={{ margin: 1.5 }} 
                id="outlined-basic" 
                label="Name" 
                variant="outlined" />
            <TextField 
                name="email"
                value={inputs.email} 
                onChange={handleChange}
                type={"email"} 
                sx={{ margin: 1.5 }} 
                label="Email" 
                variant="filled" />
            <TextField 
                name="password"
                value={inputs.password} 
                onChange={handleChange}
                type={"password"} 
                sx={{ margin: 1.5 }} 
                label="Password" 
                variant="standard" />
            <Button type="submit">Submit</Button>
            </form>
        </div>
        <div>
        <FormGroup>
            <FormControlLabel control={<Checkbox 
                onChange={()=>setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                }))}/>} 
                label="Subscribe to the Newsletter" />
            {/* <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
        </FormGroup>
        </div>
        <div>
        <FormControl fullWidth>
            {/* // onChange={()=>setInputs((prev) => ({
            //     ...prev,
            //     age: inputs.age,
            // }))}>
            // > */}
            <InputLabel>Age</InputLabel>
            <Select
                name="age"
                value={inputs.age}
                label="Age"
                onChange={handleChange} //handles the change
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        </div>
        </>
    );
}

export default Test;