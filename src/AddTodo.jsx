import { useState } from 'react'
import { useTodosStore } from './TodosContext'

const AddTodo = () => {
	const [ todoBody, setTodoBody ] = useState('');
	const todosStore = useTodosStore();

	const handleAddTodo = () => {
		todosStore.addTodo(todoBody);
		setTodoBody('');
	};

	return (
		<>
			<input value={todoBody} onChange={(e) => setTodoBody(e.target.value)} type="text" placeholder="JustDoThis" />
			<button onClick={handleAddTodo}>Enter</button>
		</>
	);
}

export default AddTodo