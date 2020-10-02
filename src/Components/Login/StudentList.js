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

function StudentListItem(props){
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
                aria-label="Registration Request"
                title="Accept/Decline"
                onClick={()=>{
                    console.log('sfs');
                }}                                    
            >
                 &ensp;<AccessTime fontSize='large' />
            </IconButton>  
            </AccordionActions>
        </Accordion>  
    );
}

export default function StudentList(props){
    return (
        <Grid
            container
            xs={12}
            style={classes.root}
        >
            <StudentListItem />
        </Grid>
    );
}