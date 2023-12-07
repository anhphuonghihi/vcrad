import Axios from 'axios';

const Request = Axios.create({
    baseURL: 'https://api-business-card.onrender.com/',
    headers:{'x-api-key':'z8j1jklsdmnfoiflksadnm23kszfhru38437823jhk12mn393u232'}
});

export default Request;
