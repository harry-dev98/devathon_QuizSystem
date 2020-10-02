import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Subject,
    ImportContacts,
} from '@material-ui/icons';

import {
    makeStyles,
    withStyles, 
    useTheme,
    withTheme,
} from '@material-ui/core/styles';

import Routes from './Routes';

const styles = makeStyles((theme)=>({
    menuButton: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}))


class BasicLayout extends React.Component{
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar 
                    position="static"
                    color="transparent"
                >
                    <Toolbar style={{
                        justifyContent: 'space-evenly'
                    }}>
                        <IconButton 
                            edge="start" 
                            className={classes.menuButton}
                            color="inherit" 
                            aria-label="menu"
                            title="Register A Course"
                            style={{
                                alignSelf: "flex-end"
                            }}
                        >
                            <Subject fontSize='large' />
                        </IconButton>
                        <Typography variant="h4">
                            ExamPortal
                        </Typography>
                        <IconButton 
                            edge="start" 
                            className={classes.menuButton}
                            color="inherit" 
                            aria-label="menu"
                            title="Exams"
                            style={{
                                alignSelf: "flex-end"
                            }}
                        >
                            <ImportContacts fontSize='large' />
                        </IconButton>
                    </Toolbar>
                    <Typography 
                        variant="h6"
                        style={{
                        
                        }}
                    >
                        Not Logged In
                    </Typography>
                </AppBar>
                <div>
                    <Routes />
                </div>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(BasicLayout);