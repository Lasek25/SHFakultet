import React from 'react';
import { useService } from '../../hooks/useService';
import { TodoService } from '../../services/todo.service';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../store/selectors/todos.selectors';
import {ITodo} from "../../store/reducers/todos.reducer";


const TodoPanel = () => {
    const todoService = useService(TodoService);
    const todos = useSelector(todosSelector);

    React.useEffect(() => {
        todoService.setNewTodo({
            done: false,
            label: 'nowe todo',
            description: 'opis todo',
            id: 1
        });
    }, []);

    const handleSetNewTodo = (todo: ITodo) => {
        todoService.setNewTodo(todo);
    };

    const handleDeleteTodo = (todo: ITodo) => {
        todoService.deleteTodo(todo);
    };

    const handleSetTodoDone = (todo: ITodo) => {
        todoService.setTodoDone(todo);
    };

    return (
        <div>
            <button onClick={() => {
                todoService.setNewTodo({
                    done: false,
                    label: 'nowe todo 2',
                    description: 'opis todo',
                    id: 2
                });
            }}
            >
                new
            </button>
            {todos.map((todo, index) =>
                <div key={index}>
                    {todo.label }
                    {/*<button onClick={handleDeleteTodo}*/}
                    {/*>*/}
                    {/*    delete*/}
                    {/*</button>*/}
                    <input type='checkbox' checked={todo.done} onClick={() => {todoService.setTodoDone({
                        done: todo.done,
                        label: todo.label,
                        description: todo.description,
                        id: index
                    })}}/>
                </div>
            )}
        </div>
    );
};


    export default TodoPanel;