import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import PageHead from '../components/Head'
import Foot from '../components/Foot'
import { useHandleAuthChange } from '../lib/handleAuthChange'
import TopNav from '../components/Nav/topNav'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            refetchOnReconnect: true,
            retry: 1,
            staleTime: 3600,
        },
    },
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider attribute="class">
            <PageHead />
            <QueryClientProvider client={queryClient}>
                <TopNav authRole={useHandleAuthChange()} />

                <Component {...pageProps} />
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </QueryClientProvider>
            <Foot />
        </ThemeProvider>
    )
}
export default MyApp
