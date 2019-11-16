import React from 'react';

import { Paper, Typography } from '@material-ui/core';

class VideoDetails extends React.Component {

    render () {
        //first, get variables passed into props
        const { video } = this.props;

        //first, check if we have no video
        if (!video) return <React.Fragment> Loading... </React.Fragment>

        //get video source, and slap it in a youtube embed link
        const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

        return (
            <React.Fragment>
                <Paper elevation={4} style={{height: "70%", padding: "20px"}}>
                    <iframe
                        frameBorder="0"
                        height="100%"
                        width="100%"
                        title="Video Player"
                        src={videoSource}
                    />
                </Paper>
                <Paper elevation={4} style={{padding: "15px", marginTop: "10px"}}>
                    <Typography variant="h5">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </React.Fragment>
        );
    }
}

//export component
export default VideoDetails;