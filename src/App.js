import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
	const [list, setList] = useState([]);
	const [inputHandler, setInputHandler] = useState("");
	const onChangeHandler = (e) => {
		e.preventDefault();
		const { value, id } = e.target;
		switch (id) {
			case "add": {
				if (inputHandler) {
					setList([...list, inputHandler]);
				}
				break;
			}
			case "input": {
				setInputHandler(value);
				break;
			}
			case "clear": {
				setInputHandler("");
				break;
			}
			default: {
				break;
			}
		}
	};
	return (
		<>
			<TodoForm onChangeHandler={onChangeHandler} inputHandler={inputHandler} />
			<TodoList list={list} />
		</>
	);
}

export default App;
