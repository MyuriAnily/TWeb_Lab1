export interface Todo {
	id: string
	title: string
	description: string
	dueDate: string
	assignee: string
}

export interface TodoWithPriority extends Todo {
	priority: string
	color: string
}