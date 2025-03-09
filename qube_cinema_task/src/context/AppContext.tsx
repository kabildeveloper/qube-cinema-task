import {createContext, ReactNode, useContext, useState} from 'react';
import {Breadcrumb} from "../components/Breadcrumbs.tsx";

export type AppStateType = {
    headerText: string,
}

type AppContextType = {
    appState: AppStateType,
    updateAppState : (payload: AppStateType) => void;
    breadcrumbs: Breadcrumb[];
    updateBreadcrumbs : (breadcrumbs: Breadcrumb[]) => void;
}

export const AppContext = createContext<AppContextType | undefined >(undefined);

export const AppContextProvider = ({children}: {children: ReactNode}) => {

    const [appState, setAppState] = useState<AppStateType>({headerText: 'Overview'});
    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

    const updateAppState = (payload: AppStateType) => {
        setAppState(payload);
    }

    const updateBreadcrumbs = (breadcrumbs: Breadcrumb[]) => {
        setBreadcrumbs(breadcrumbs);
    }

    return (
        <AppContext.Provider value={{appState, updateAppState, breadcrumbs, updateBreadcrumbs}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppState = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error(
            'useAppState() must be used within the AppContextProvider'
        )
    }
    return context;
}
