import { useQuery } from 'react-query';
import { useState, useEffect } from 'preact/compat';

import { useAuth } from '@/hooks/useAuth';
import useDebounce from '@/hooks/useDebounce';
import SearchBar from '@/components/search';
import getTodos from '@/apis/todos/getTodos';

import { Todo } from './components/todo';
import "./index.scss";

const fetchTodos = async (search = '', signal?: AbortSignal) => {
    try {
        const todos = await getTodos(signal);

        if (search) {
            return todos.filter((todo: {
                title: string;
            }) =>
                todo.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        return todos;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Request was aborted');
            return [];
        }
        throw error;
    }
};

const Todos = () => {
    const { token, setToken } = useAuth();
    const [search, setSearch] = useState('');
    const [debouncedSearch, abortController] = useDebounce(search, 500);

    if (!token) {
        return <div>Unauthorized</div>
    }

    const { data, isLoading, error } = useQuery(
        ['todos', debouncedSearch],
        () => fetchTodos(debouncedSearch, abortController.signal),
        {
            enabled: !!token || !!debouncedSearch,
            keepPreviousData: true,
            retry(failureCount, error: any) {
                if (error?.name === 'AbortError') {
                    return false;
                }
                return failureCount < 3;
            },
        }
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {(error as any).message}</div>;

    return (
        <>
            <SearchBar search={search} setSearch={setSearch} />
            <ul id="todos">
                {data.map((todo: any) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </>
    );
}

export default Todos;