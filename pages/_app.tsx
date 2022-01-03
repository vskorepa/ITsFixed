import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import PageHead from '../components/Head'
import Foot from '../components/Foot'
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
        },
    },
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider attribute="class">
            <PageHead />

            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
            <Foot />
        </ThemeProvider>
    )
}
export default MyApp
