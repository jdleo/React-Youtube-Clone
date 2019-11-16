import axios from 'axios';

//export axios create function
export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults: 5,
        key: AIzaSyC3_ofK3itJOi8kg0sVuNRWwQHfa0LITuQ
    }
});