import React, { useState } from "react";

function App() {
	const [list, setList] = useState([]);
	var inputItem = "";
	console.log(list);
	const onButtonClick = (e) => {
		e.preventDefault();
		setList([...list, inputItem]);
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
			<button type="button" onClick={onButtonClick}>
				Add
			</button>
			{list.map((item) => (
				<h1>{item}</h1>
			))}
		</>
	);
}

export default App;
