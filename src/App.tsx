import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RoutesProvider } from './contexts/RouteContext';
import "./global.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RoutesProvider> 
                <RouterProvider router={router} />
            </RoutesProvider>
        </QueryClientProvider>
    );
}

export default App;
