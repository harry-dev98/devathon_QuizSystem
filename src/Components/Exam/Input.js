import React from 'react';
import {
    IconButton,
    Typography,
    Accordion,
    AccordionSummary,
    FormControlLabel,
    Checkbox,
    TextareaAutosize,
} from '@material-ui/core';

import { ExamArea } from '../Components'

export default class Desc extends React.Component{
    handleFileChange = ()=>{
        console.log("filechanged");
    }
    handleTextChange = () => {
        console.log("text added");
    }
    render(){
        const ans = ()=>(
            <div>
                <TextareaAutosize 
                    aria-label="Type Answer Here" 
                    rowsMin={10} 
                    placeholder="Start typing the answer" 
                    onChange={this.handleTextChange} 
                />
            </div>
        );
        
        return (
            <ExamArea ques={this.props.ques} ans={ans} handleNext={this.props.handleNext} handlePrev={this.props.handlePrev} />
        );
    }
}