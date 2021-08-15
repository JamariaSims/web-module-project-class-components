import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";

function App() {
	const saveKey = "LocalSave";
	const saveData = JSON.parse(window.localStorage.getItem(saveKey));
	const [listHandler, setListHandler] = useState(saveData || []);
	const [inputHandler, setInputHandler] = useState({
		task: "",
		id: null,
		completed: false,
	});
	const ToggleSwitch = (e) => {
		e.preventDefault();
		console.log(e.target);
	};
	const onChangeHandler = (e) => {
		e.preventDefault();
		const { value, id } = e.target;
		switch (id) {
			case "add": {
				setListHandler([...listHandler, inputHandler]);
				window.localStorage.setItem(saveKey, JSON.stringify(listHandler));
				break;
			}
			case "input": {
				setInputHandler({
					...inputHandler,
					["task"]: value,
					["id"]: Date.now(),
				});
				break;
			}
			case "clear": {
				setInputHandler({ task: "", id: null, completed: false });
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
			<TodoList list={listHandler} ToggleSwitch={ToggleSwitch} />
		</>
	);
}

export default App;
