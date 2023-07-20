import axios, {AxiosResponse} from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_SITE_API_URL;

export const getDataFromApi =  (url: string) => {
    try {
        //console.log(`${apiUrl}${url}`);
        const resp = axios.get(`${apiUrl}${url}`);
        //console.log(resp);
        return resp;
    } catch (error: any) {
        return error.response;
    }
    
    
}