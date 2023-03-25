import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '0c98f4d8a825412f90159902059244d2',
  },
});
