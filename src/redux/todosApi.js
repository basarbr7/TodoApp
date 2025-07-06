
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    // prottek ta endpoint er jonno akbarei set kora
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token')
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')
        return headers
    }, 
    // credentials: 'include'
  }),
  endpoints: (builder)=> ({
    login: builder.mutation({
        query: (credentials) =>({
            url: "user/login",
            method: "POST",
            body: credentials, // eta na dile login faild dakai
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json',
            // }
        })
    }),
     getProfile: builder.query({
        query: (id) => `/user/${id}`,
        method: "GET",
    })
  })
})

export const { useLoginMutation, useGetProfileQuery } = todosApi