import { useState } from 'react';

export default function TodoForm() {
    const [todo, setTodo] = useState('');
    
    return (
        <form>
            <input type="text" placeholder="Add a new todo" />
            <button type="submit">Add Todo</button>
        </form>
    );
}