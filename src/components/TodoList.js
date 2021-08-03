/* -------------------------------------------------------------------------- */
/*                                  TodoForm  
        1.Display TodoForm
        2.Iterate Over The List
        3.Pass Each Iteration To Todo                       
/* -------------------------------------------------------------------------- */
import React from "react";
import Todo from "./Todo";

function TodoList(props) {
	const { list } = props;
	return (
		<>
			{list.map((item) => (
				<Todo item={item} />
			))}
		</>
	);
}

export default TodoList;
