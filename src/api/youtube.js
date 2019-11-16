import axios from 'axios';

//export axios create function
export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY
    }
});