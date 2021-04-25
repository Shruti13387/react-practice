import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JvpJhCU6ncqf62X3-pSedQMUGKjAEtkqkx7pY4GnfTQ'
    }
});

