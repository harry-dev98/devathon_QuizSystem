import React from 'react';
import {
    IconButton,
    Typography,
    Grid,
    Paper,
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary
} from '@material-ui/core';

import {
    ExpandMore,
    AccessTime
} from '@material-ui/icons';

const classes = {
    root: {
        justifyContent: "center",
        margin: 20
    },
    heading: {

    },

}

function CourseListItem(props){
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
            <AccordionActions>
            <IconButton   
                edge="start" 
                color="inherit" 
                aria-label="Course"
                title="Course"
                onClick={()=>{
                    window.location.href = "/course/courseid";
                }}                                    
            >
                Start Test &ensp;<AccessTime fontSize='large' />
            </IconButton>  
            </AccordionActions>
        </Accordion>  
    );
}

export default function CourseList(props){
    return (
        <Grid
            container
            xs={12}
            style={classes.root}
        >
            <CourseListItem />
        </Grid>
    );
}