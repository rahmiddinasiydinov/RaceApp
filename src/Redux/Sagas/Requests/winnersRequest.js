import axios from "axios";
export const requestToWinners = ()=> axios.request({method:"GET", url:'/winners'})