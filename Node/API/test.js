const axios = require('axios');

const url = 'https://api.upstox.com/v2/market-quote/quotes?instrument_key=NSE_EQ%7CINE848E01016';
const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer {your_access_token}'
};

axios.get(url, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });