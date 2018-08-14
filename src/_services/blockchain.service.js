import axios from 'axios'

const getLatest = (payload) => request.get('/latestblock' + '?cors=true', payload);
const searchBlocks = (searchText) => request.get('/rawblock/' + searchText + '?cors=true');
const searchTransactions = (searchText) => request.get('/rawtx/' + searchText + '?cors=true');

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
    searchBlocks,
    searchTransactions
};

