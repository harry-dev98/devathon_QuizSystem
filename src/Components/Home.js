import React from 'react';
import {
    Grid,
    Paper,
    IconButton,
    Typography,
} from '@material-ui/core';

import {
    Subject,
    ImportContacts,
} from '@material-ui/icons';
const styles = {
    paper: {
        height: 400,
        display: "flex",
        flex: 1,
        margin: 10,
        justifyContent: "space-evenly",
        justifyItems: "center",
        alignItems: "center",
    }, 
    icon: {
        height: 200,
        width: 200,
    }

}

export default function Home(){
    return (
        <div>
            <Grid
                container
                xs={12}
                spacing={1}
                style={{
                    marginTop: 100,
                }}
            >
                <Grid 
                    item
                    xs={6}
                    style={{
                        justifyContent: "center",
                    }}
                >
                    <Paper 
                        elevation={3} 
                        square
                        style={styles.paper}
                    >
                         <Grid item>
                            <IconButton   
                                edge="start" 
                                color="inherit" 
                                aria-label="menu"
                                title="Subject"
                                style={styles.icon}
                                onClick={()=>{
                                    window.location.href = "/register";
                                }}                                    
                            >
                                <Subject fontSize='large' />
                            </IconButton>   

                        </Grid>
                        <Grid 
                            item 
                            xs={3} 
                            spacing={3}
                        >
                            <Typography 
                                variant="h3" 
                                style={{pointerEvents: "none"}} 
                            >
                                Register Course
                            </Typography>
                        </Grid>     
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={6}
                    style={{
                        justifyContent: "center",
                    }}
                >
                    <Paper 
                        elevation={3} 
                        square
                        style={styles.paper}
                    >
                        <Grid item>
                            <IconButton   
                                edge="start" 
                                color="inherit" 
                                aria-label="menu"
                                title="Exam"
                                style={styles.icon}
                                onClick={()=>{
                                    window.location.href = "/exam/userid";
                                }}
                            >
                                <ImportContacts fontSize='large' />
                            </IconButton>   

                        </Grid>
                        <Grid 
                            item 
                            xs={3} 
                            spacing={3}
                        >
                            <Typography 
                                variant="h3" 
                                style={{pointerEvents: "none"}} >
                                Exam
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}