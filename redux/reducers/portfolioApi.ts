import { EmailData } from '@/models/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const portfolioApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (build) => ({
    sendEmail: build.mutation<string, EmailData>({
      query: (data) => ({ 
        url: `api/email`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),
  }),
});

export const { useSendEmailMutation } = portfolioApi;
