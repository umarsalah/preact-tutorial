import { useQuery } from 'react-query';

import getTodos from '@/apis/todos/getTodos';
import { useAuth } from '@/hooks/useAuth';
import { Todo } from './components/todo';
import "./index.scss";


const fetchTodos = async () => await getTodos();


const Todos = () => {
    const { token , setToken } = useAuth();    
    if (!token) {
        return <div>Unauthorized</div>
    }

    const { data, isLoading, error } = useQuery('todos', fetchTodos);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {(error as any).message}</div>;
    return (
        <>
            <h1>Todos</h1>
            <ul id="todos">
                {data.map((todo: any) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </>
    );
}

export default Todos;