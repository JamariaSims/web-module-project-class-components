import React from "react";

function TodoForm(props) {
	const { onChangeHandler, inputHandler } = props;
	return (
		<>
			<form>
				<h1>Todos List</h1>
				<input
					onChange={onChangeHandler}
					id="input"
					type="text"
					value={inputHandler}
				/>
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
