//BASE DA URL = https://api.themoviedb.org/3/
//URL API = movie/11?api_key=07441f55258371c09a050f9b8ab3989b


import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;


