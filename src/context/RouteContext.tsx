import { createContext, useContext, useState, ReactNode } from 'react';

interface RouteContextData {
    activeRoute: string;
    setActiveRoute: (route: string) => void;
}

const RouteContext = createContext<RouteContextData | undefined>(undefined);

export const RoutesProvider = ({ children }: { children: ReactNode }) => {
    const [activeRoute, setActiveRoute] = useState('/');

    return (
        <RouteContext.Provider value={{ activeRoute, setActiveRoute }}>
            {children}
        </RouteContext.Provider>
    );
};

export const useRoute = () => {
    const context = useContext(RouteContext);
    if (!context) {
        throw new Error('useRoute must be used within a RouteProvider');
    }
    return context;
};
