import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'a3a62c81a3mshcec850ccdc40a4ep1bbe3djsn4ffe2dc3aefb'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/stats'

const createRequest = (url) => ({ url, header: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=> ({
        getCryptos: builder.query({
            query: ()=> createRequest('/exchanges')
        })
    })
})

