import React, { useState } from "react";
import { 
    Tabs,
    Tab,
    AppBar,
    Toolbar,
} from "@mui/material";


const TestTabs = () => {
    const [value, setValue] = useState();

    return (
        <>
        <div>
            <AppBar>
                <Toolbar>
                    <Tabs 
                        indicatorColor="secondary" 
                        textColor="inherit"
                        value={value} 
                        onChange={(event, value) => setValue(value)
                    }>
                        <Tab label="First"/>
                        <Tab label="Second"/>
                        <Tab label="Third"/>
                    </Tabs>
                </Toolbar>
            </AppBar>
            
        </div>
        </>
    );
}

export default TestTabs;