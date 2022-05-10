import { useObserver } from 'mobx-react';
import { useTodosStore } from '../Components/TodosContext';

import AddTodo from "../Components/AddTodo";
import Todo from "../Components/Todo";


const FourthLab = () => {
	const todosStore = useTodosStore();
  
	return useObserver(() => (
		<>
		  {todosStore.todos.map(todo => <Todo key={todo.id} text={todo.body} id={todo.id} />)}
		  <AddTodo />
		</>
	  ));
};

export default FourthLab;
