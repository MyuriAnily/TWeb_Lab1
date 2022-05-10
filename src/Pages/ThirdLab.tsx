import { Todo, TodoWithPriority } from '../inteface'
import { nanoid } from 'nanoid'

const todo: Todo = {
	id: nanoid(),
	title: 'title hello',
	description: 'description hello world',
	assignee: 'not me',
	dueDate: 'tomorrow'
}

const todoWithPriority: TodoWithPriority = {
	id: nanoid(),
	title: 'title priority hello',
	description: 'description priority hello world',
	assignee: 'not me',
	dueDate: 'today',
	priority: 'very high',
	color: 'red'
}

const ThirdLab = () => {
  return <div>
	  todo
	  <div>
	 	{ JSON.stringify(todo) }
	  </div>
	 todo with priority
	 <div>
	 	{ JSON.stringify(todoWithPriority) }
	 </div>
  </div>;
};

export default ThirdLab;
