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
                <IconButton   
                    edge="start" 
                    color="inherit" 
                    aria-label="Add Files"
                    title="Add Files"
                    onClick={()=>{
                        let ip = document.getElementById('fileinput');
                        ip.click();
                    }}                                    
                >
                    {/* <Subject fontSize='large' /> */}
                </IconButton> 
                <input
                    accept="image/*"
                    id="fileinput"
                    multiple
                    type="file"
                    hidden
                    onChange={this.handleFileChange}
                />

            </div>
        );
        
        return (
            <ExamArea ques={this.props.ques} ans={ans} handleNext={this.props.handleNext} handlePrev={this.props.handlePrev} />
        );
    }
}