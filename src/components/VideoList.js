import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

class VideoList extends React.Component {
    render () {
        //get current list of videos
        const { videos } = this.props;

        const listOfVideos = videos.map((video, id) => (
            //create a video item for this video in videos
            <VideoItem video={video} key={id} onVideoSelect={this.props.onVideoSelect}/>
        ));

        //return video items we just got
        return (
            <Grid container spacing={10}>
                {listOfVideos}
            </Grid>
        );
    }
}

//export component
export default VideoList;