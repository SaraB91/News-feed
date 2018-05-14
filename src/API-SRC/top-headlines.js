import axios from 'axios';



const getTopHeadlines = (sources) =>{
    return axios.get(`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=004872b5eeec439baa422397013b96cc`);
  } 
  const getCompleteSources = () =>{
   return axios.get(`https://newsapi.org/v2/sources?apiKey=004872b5eeec439baa422397013b96cc`);
 } 

export { getTopHeadlines, getCompleteSources };
