import { EmailData } from '@/models/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const portfolioApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (build) => ({
    sendEmail: build.mutation<any, EmailData>({
      query: (data) => ({ 
        url: `api/email`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = portfolioApi;
