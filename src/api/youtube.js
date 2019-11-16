import axios from 'axios';

//export axios create function
export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3'
});