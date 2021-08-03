import React, { useState } from "react";

function App() {
	const [list, setList] = useState([]);
	var inputItem = "";
	console.log(list);
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
		inputItem = e.target.value;
	};
	return (
		<>
			<h1>Todos List</h1>
			<input type="text" onChange={onChangeHandler} />
			<button type="button" onClick={onAddButton}>
				Add
			</button>
			<button type="button" onClick={onClearButton}>
				Clear
			</button>
			{list.map((item) => (
				<h1>{item}</h1>
			))}
		</>
	);
}

export default App;
