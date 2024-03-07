import React from "react";
import { 
    Autocomplete,
    TextField,
    Box,
} from "@mui/material";

const state= [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",]

const TestAutoComplete = () => {
    return (
        <Box>
            <Autocomplete 
                sx={{ width: 300 }} 
                options={state} 
                renderInput={(params) => (<TextField{...params} label="List of States in India" />
                )}
            />
        </Box>
    )
}

export default TestAutoComplete;
