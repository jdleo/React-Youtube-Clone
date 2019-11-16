import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

class VideoItem extends React.Component {
    render () {

        //first, get the video item from the prop that was passed in
        const {video} = this.props;


        return (
            <Grid item xs={12}>
                <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => this.props.onVideoSelect(video)}>
                    <img src={video.snippet.thumbnails.medium.url} alt="Thumbnail" style={{marginRight: '20px'}}/>
                    <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                </Paper>
            </Grid>
        );
    }
}

//export component
export default VideoItem;