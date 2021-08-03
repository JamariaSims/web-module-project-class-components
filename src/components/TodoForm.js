import React from "react";

function TodoForm(props) {
	const { onChangeHandler } = props;
	return (
		<>
			<form onChange={onChangeHandler}>
				<h1>Todos List</h1>
				<input id="input" type="text" />
				<button onClick={onChangeHandler} id="add" type="button">
					Add
				</button>
				<button onClick={onChangeHandler} id="clear" type="button">
					Clear
				</button>
			</form>
		</>
	);
}

export default TodoForm;
