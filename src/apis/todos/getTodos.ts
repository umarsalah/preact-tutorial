const { VITE_API_URL: apiUrl } = import.meta.env;


const getTodos = async (signal: AbortSignal | undefined = undefined) => {
    try {
        const response = await fetch(`${apiUrl}/todos`, { signal });
        if (!response.ok) {
            throw new Error(`Failed to fetch Todos: ${response.statusText}`);
        }
        const todos = await response.json();

        return todos;
    } catch (error: any) {
        console.error(error);
        throw new Error(`Failed to fetch Todos: ${error?.message}`);
    }
}

export default getTodos;