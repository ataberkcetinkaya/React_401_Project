import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from './contexts/AuthContext';
import { BasketProvider } from './contexts/BasketContext';

const queryClient = new QueryClient();

// const queryClient = new QueryClient({ 
//   defaultOptions: {
//     queries: {
//       refetchOnMount: false, //this can prevent refetching on mount
//       refetchOnWindowFocus: false, //this can prevent refetching on window focus
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <AuthProvider>
        <BasketProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </BasketProvider>
      </AuthProvider>
    </ChakraProvider>
  </QueryClientProvider>
);

reportWebVitals();
