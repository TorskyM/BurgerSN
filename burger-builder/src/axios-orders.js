import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-project-1558264604924.firebaseio.com/'
});

export default instance;