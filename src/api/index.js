import axios from 'axios';

const config = {
  baseUrl:'https://jsonplaceholder.typicode.com/users',  
  //baseUrl:'https://api.hnpwa.com/v0/news/1.json',
};

//API 함수 정리
function fetchUserList() {
    return axios.get(`${config.baseUrl}`);
};

export {
    fetchUserList
};
