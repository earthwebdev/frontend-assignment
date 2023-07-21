import '@/styles/globals.css'
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Provider } from 'react-redux';

//import { PersistGate } from 'redux-persist/integration/react';
//import { persistor } from '@/store/persistStore';

import { persistor, store } from '../store/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  // Create a client
const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
        <ReactQueryDevtools />
    </QueryClientProvider>
  )
}