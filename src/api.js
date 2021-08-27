import axios from 'axios'
import { QueryClient } from 'react-query'

export const api = axios.create({
    baseURL: process.env.REACT_APP_API,
});

export const API_KEYS = {
    COMPARE: '/data/price'
};

const defaultQueryFn = ({ queryKey }) =>
    api.get(queryKey[0]).then((res) => (res?.data?.error ? Promise.reject(res?.data?.error) : res?.data));

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Apikey ${process.env.REACT_APP_API_KEY}`;
    return config;
});

const onResponseFulfilled = (response) => {
    return response;
};

const onResponseRejected = (error) => {
    return Promise.reject(error);
};

api.interceptors.response.use(onResponseFulfilled, onResponseRejected);

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 30, // data lives in a cache 30sec
            refetchOnWindowFocus: false,
            retry: false, // after getting error disable auto-retry
            queryFn: defaultQueryFn,
        },
    },
});

export const queries = {
    getCurrencyData: ({ queryKey }) => {
        const [, { params }] = queryKey
        return api.get(API_KEYS.COMPARE, { params }).then((res => res?.data))
    },
};
