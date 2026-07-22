import * as z from "zod";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type taskAction =
| { type: 'ADD_TODO'; payload: string }
| { type: 'TOGGLE_TODO'; payload: number } 
| { type: 'DELETE_TODO'; payload: number };


const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
});

const TaskStateScheme = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
})


export const getTasksInitialState = (): TaskState => {
const localStorageState = localStorage.getItem('tasks-state');

if ( !localStorageState) {
        return{
            todos: [],
            completed: 0,
            pending: 0,
            length: 0,
        };
    }

    //validacion mediante zod
    const result = TaskStateScheme.safeParse(JSON.parse(localStorageState));
    if(result.error){
        console.log(result.error);
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0,
        };
    }
    return result.data;
};

export const taskReducer = (
    state: TaskState, 
    action: taskAction
): TaskState => {
    switch( action.type ) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };

            const newTodos = [...state.todos, newTodo];

            return {
                ...state,
                todos: newTodos,
                length: newTodos.length,
                pending: state.pending + 1,
            };
        }
            
        case 'DELETE_TODO': {
            // Corregido: !== y aseguramos que el payload sea number
            const currentTodos = state.todos.filter((todo) => todo.id !== action.payload);
            
            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completed: currentTodos.filter(todo => todo.completed).length,
                pending: currentTodos.filter(todo => !todo.completed).length,
            };
        }

        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map((todo) => 
                todo.id === action.payload 
                    ? { ...todo, completed: !todo.completed } 
                    : todo
            );

            return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter(todo => todo.completed).length,
                pending: updatedTodos.filter(todo => !todo.completed).length,
            };
        }

        default:
            return state;
    }
};