import React from 'react';
import {
    IconButton,
    Typography,
    Grid,
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary
} from '@material-ui/core';

import {
    ExpandMore,
    AccessTime
} from '@material-ui/icons';

import {
    TrueFalse,
    Mcqs,
    Input,
    Descriptive,
} from '../Components';

const classes = {
    root: {
        justifyContent: "center",
        margin: 20
    },
    heading: {
        height: 10,
    },

}

const color = {
    pending: "#dece7c",
    done: "#6f994e",
    skip: "#ba4b47",
}
function QuestionListItem(props){
    return (
        <Grid item>
            <IconButton   
                edge="start" 
                color="black"
                title="Q1"
                style={{
                    backgroundColor: color[props.item],
                    margin: 2,
                }}
                onClick={()=>{
                    console.log("Buttn pressed");
                }}                                    
            >
            Q1
        </IconButton> 
        </Grid>
    );
}

function QuestionList(props){
    const demo = ['pending', 'done', 'skip'];
    return (
        demo.map((item, index)=><QuestionListItem item={item} key={index}/>)
    );
}

export default function ExamList(props){
    return (
        <Grid
            container
            xs={12}
            style={classes.root}
        >
            <Grid item
                xs={10}
                spacing={1}
            >
               {""}
            </Grid> 
            <Grid item
                xs={1}
            >
                <QuestionList />
            </Grid>            
        </Grid>
    );
}