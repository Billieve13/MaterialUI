import React, { useState } from "react";
import { 
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";

const TestAccordion = () => {
    const [accordion, setAccordion] = useState(false);

    return (
        <Box>
            <Accordion 
                expanded={accordion === "test1"} 
                onChange={() => setAccordion("test1")}
            >
                <AccordionSummary expandIcon={">"}>
                    <Typography>My details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>I live the thug life</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion 
                expanded={accordion === "test2"} 
                onChange={() => setAccordion("test2")}
            >
                <AccordionSummary expandIcon={">"}>
                    <Typography>My details 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Sup</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default TestAccordion;