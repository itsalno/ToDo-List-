import React, { useState } from 'react';
import Todo from './Todo';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo-list-container">
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
            <div>
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;