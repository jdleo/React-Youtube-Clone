import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

class VideoList extends React.Component {
    render () {
        //get current list of videos
        const listOfVideos = this.props.videos.map((video, id) => (
            //create a video item for this video in videos
            <VideoItem video={video} key={id}/>
        ));

        //return video items we just got
        return listOfVideos;
    }
}

//export component
export default VideoList;