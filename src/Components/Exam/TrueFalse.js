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
                <Accordion>
                    <AccordionSummary>
                        <FormControlLabel
                            aria-label="True"
                            title="True"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox onChange={this.props.handleChange} />}
                            label={"True"}
                        />
                        <FormControlLabel
                            aria-label="False"
                            title="False"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox onChange={this.props.handleChange} />}
                            label={"False"}
                        />    
                    </AccordionSummary>
                </Accordion>
            </div>
        );
        
        return (
            <ExamArea ques={this.props.ques} ans={ans} handleNext={this.props.handleNext} handlePrev={this.props.handlePrev} />
        );
    }
}