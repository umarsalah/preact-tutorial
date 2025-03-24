import { useContext } from 'preact/hooks';

import { authContext } from '@/context/authContext';

export const useAuth = () => {
    const { token, setToken } = useContext(authContext);
    return { token, setToken };
};