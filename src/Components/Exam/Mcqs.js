import React from 'react';
import {
    IconButton,
    Typography,
    Accordion,
    AccordionSummary,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';

import { ExamArea } from '../Components'

export default class MCQS extends React.Component{
    render(){
        const ans = ()=>(
            <div>
                {this.props.options.map((opt, index)=>(
                    <Accordion key={index}>
                        <AccordionSummary>
                        <FormControlLabel
                            aria-label="Choose Correct Option"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox onChange={this.props.handleChange} />}
                            label={opt}
                        />    
                        </AccordionSummary>
                    </Accordion>
                ))}
            </div>
        );
        
        return (
            <ExamArea ques={this.props.ques} ans={ans} handleNext={this.props.handleNext} handlePrev={this.props.handlePrev} />
        );
    }
}