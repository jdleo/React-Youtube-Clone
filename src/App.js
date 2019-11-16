import React from 'react';
import { Grid } from '@material-ui/core';

import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

import youtube from './api/youtube';

class App extends React.Component {

    //render function
    render () {
        return (
            <Grid container spacing={16} justify="center" >
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <SearchBar></SearchBar>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails></VideoDetails>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList></VideoList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

//export component
export default App;