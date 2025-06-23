import TodoItem from './TodoItem.jsx';

export default function TodoList() {   
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        </div>
    );
}