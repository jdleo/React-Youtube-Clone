import React from 'react';
import { Grid } from '@material-ui/core';

import {SearchBar, VideoDetails, VideoList } from './components';

import youtube from './api/youtube';

class App extends React.Component {

    //helper method to handle submit from search bar component
    handleSubmit = async (term) => {
        //pass search term into youtube API search (using our axios helper)
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                q: term
            }
        });

        console.log(response.data.items);
    }

    //render function
    render () {
        return (
            <Grid container spacing={10} justify="center" >
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
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