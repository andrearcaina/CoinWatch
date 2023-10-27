// fetches data from API using reduxjs toolkit

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST
}

const createRequest = (url) => ({ url, headers:headers });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

// this is hook to fetch data from the API using reduxjs toolkit
export const { useGetCryptosQuery } = cryptoApi;
