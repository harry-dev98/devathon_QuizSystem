import React from 'react';

import {
    Step,
    Stepper,
    StepLabel,
    Typography,
    Grid,
    IconButton,
} from '@material-ui/core';

import {Home} from '@material-ui/icons';
const steps = ["Create Quiz", "Add Questions"]

function AddQuestions(){
    return ("");
}

function AddQuiz(){
    return ("");
}

const getStepContent = (step)=>{
    if(step == 0){
        return (
            <AddQuiz />
        )
    }
    else{
        return (
            <AddQuestions />
        )
    }
}

export default class SetTest extends React.Component{
    state = {
        activeStep: 0,

    };

    render(){
        return (
            <Grid 
                container
                lg={10}
            >
                <Stepper activeStep={this.state.activeStep}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {this.state.activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            Test Set Successfully!!
                        </Typography>
                        <Typography variant="subtitle1">
                            <IconButton   
                                edge="start" 
                                color="inherit" 
                                aria-label="home"
                                title="Home"
                                style={styles.icon}
                                onClick={()=>{
                                    window.location.href = "/";
                                }}                                    
                            >
                                <Home fontSize='large' />
                            </IconButton> 
                        </Typography>
                    </React.Fragment>
                    ) : (
                    <React.Fragment>
                        {getStepContent(this.state.activeStep)}
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                            {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                            </Button>
                        </div>
                    </React.Fragment>
                    )}
                </React.Fragment>
            </Grid>
        );
    }
}