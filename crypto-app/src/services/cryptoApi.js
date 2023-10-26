// fetches data from API using reduxjs toolkit

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
    'X-RapidAPI-Key': '42ddb1df7cmsh14f44513961c173p16958djsn17be177f6d0f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseURL = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers:headers })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery, //hook to fetch data
} = cryptoApi;
