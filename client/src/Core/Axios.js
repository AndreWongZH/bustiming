import axios from 'axios';

let instance;

if (process.env.NODE_ENV === 'development') {
  instance = axios.create({
    baseURL: 'http://localhost:5000',
  });
} else {
  instance = axios.create();
}

export default instance;
