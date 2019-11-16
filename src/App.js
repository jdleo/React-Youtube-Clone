import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

class App extends React.Component {

    //render function
    render () {
        return (
            <Grid container spacing={16} justify="center" >
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            { /* search bar */ }
                        </Grid>
                        <Grid item xs={8}>
                            { /* video details */ }
                        </Grid>
                        <Grid item xs={4}>
                            { /* video list */ }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

//export component
export default App;