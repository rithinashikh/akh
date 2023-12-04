import axios from "axios";
 const baseUrl = 'https://dash.dnsrobo.com';
//  https://dash.dnsrobo.com
const axiosInstance = axios.create({
  baseURL: baseUrl,
 
});

export default axiosInstance;   