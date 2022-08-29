import axios from 'axios';

export const requestGetGarage=()=>{
    return axios.request({
        method:'GET', 
        url:'/garage'
    });
}