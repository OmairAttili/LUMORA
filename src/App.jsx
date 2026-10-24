import React from 'react'
import { RouterProvider } from "react-router/dom";
import {
  QueryClientProvider,
  QueryClient
} from '@tanstack/react-query'
import router from './Router';

function App() {
  const queryClient = new QueryClient()
  return <>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  </>
}

export default App