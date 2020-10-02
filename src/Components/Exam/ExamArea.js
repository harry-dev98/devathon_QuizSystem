import React from 'react';
import {
    IconButton,
    Typography,
    Grid,
    Card,
    CardActions,
    CardHeader,
    CardContent,
} from '@material-ui/core';


import {
    NavigateNext,
    NavigateBefore,
} from '@material-ui/icons'

export default function ExamArea(props){
    return (
        <Card>
            <CardHeader>
                <Typography variant="h4">{this.props.ques}</Typography>
            </CardHeader>
            <CardContent>
                {props.ans}
            </CardContent>
            <CardActions>
                <Grid item xs={3} spacing={3}>
                    <IconButton   
                        edge="start" 
                        color="inherit" 
                        title="Before"
                        style={styles.icon}
                        onClick={this.props.handlePrev}                                    
                    >
                        Prev<NavigateBefore/>
                    </IconButton> 
                </Grid>
                <Grid item xs={3} spacing={3}>
                    <IconButton   
                        edge="start" 
                        color="inherit" 
                        title="Next"
                        style={styles.icon}
                        onClick={this.props.handleNext}            
                    >
                        Next<NavigateNext/>
                    </IconButton> 
                </Grid>
            </CardActions>
        </Card>
    );
}