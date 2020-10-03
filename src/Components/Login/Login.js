import React from 'react';
import {
    IconButton,
    Typography,
    Grid,
    TextField,
    Button as RaisedButton,
} from '@material-ui/core';


export default class Login extends React.Component{
    render(){
        return (
            <Grid
                container
                xs={12}
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange = {(event,newValue) => this.setState({username:newValue})}
                    />
                    <br/>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <RaisedButton 
                        label="Submit" 
                        primary={true} 
                        // style={style} 
                        onClick={(event) => this.handleClick(event)}
                    />
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        );
    }
}