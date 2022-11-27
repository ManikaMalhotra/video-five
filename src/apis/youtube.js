import axios from 'axios';

const KEY = 'AIzaSyA2nvPGdHkcXtaX_s0A49p1AIShnGSyiOM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});