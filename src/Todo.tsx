interface TodoProps {
    todo: string;
    index: number;
    removeTodo: (index: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, index, removeTodo }) => {
    return (
        <div className="todo">
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
    );
};

export default Todo;