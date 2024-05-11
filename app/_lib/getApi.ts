
const axios = require('axios');
export const api =  async  ()  =>{
    const response = await axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    return response.data.USDBRL
}