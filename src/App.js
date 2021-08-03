import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
	const [list, setList] = useState([]);
	var inputItem = "";
	const onAddButton = (e) => {
		e.preventDefault();
		setList([...list, inputItem]);
		e.target.value = "";
	};
	const onClearButton = (e) => {
		e.preventDefault();
		setList([]);
		e.target.value = "";
	};
	const onChangeHandler = (e) => {
		e.preventDefault();
		switch (e.target.id) {
		}
	};
	return (
		<>
			<TodoForm onChangeHandler={onChangeHandler} />
			<TodoList />
		</>
	);
}

export default App;
