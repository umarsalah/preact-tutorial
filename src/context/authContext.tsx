import { createContext } from 'preact';
import { ReactNode } from 'preact/compat';
import { useState } from 'preact/hooks';

export const authContext = createContext<{
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
}>({
    token: '',
    setToken: () => { },
});

interface Props {
    children?: ReactNode
};

export const AuthProvider = ({ children }: Props) => {
    const [token, setToken] = useState('');

    return (
        <authContext.Provider value={{ token, setToken }}>
            {children}
        </authContext.Provider>
    );
}