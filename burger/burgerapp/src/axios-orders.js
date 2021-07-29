import axios from 'axios';

const config = {
    baseURL: 'https://burger-react-17f38.firebaseio.com/'
}

const instance = axios.create(config);

export default instance