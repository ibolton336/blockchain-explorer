import axios from 'axios'

const getLatest = (payload) => request.get('/latestblock', payload);

const axiosInstance = axios.create({
    baseURL: "https://blockchain.info",
    responseType: 'json',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    crossdomain: true
});

const request = {
    get: (url, params) => (axiosInstance.get(url, { params: params })),
}



export const blockchainService = {
    getLatest,
};

