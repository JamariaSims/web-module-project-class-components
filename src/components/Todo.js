/* -------------------------------------------------------------------------- */
/*                                  Todo
        1.Create A Card With Received Props                    
/* -------------------------------------------------------------------------- */
import React, { useState, useEffect } from "react";

function Todo(props) {
	const { id, task, checked } = props.item;
	return (
		<form id={id} key={Date.now()}>
			<h1 key={"1"}>{task}</h1>
			<h3 key={"2"}>{id}</h3>
			<input
				onClick={props.ToggleSwitch}
				key={"3"}
				type="checkbox"
				value={checked}
			/>
			Completed
			<br />
		</form>
	);
}

export default Todo;
