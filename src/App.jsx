import React from "react";
import { InfoStudents } from "./components/StudentInformation/StudentInformation";
import { StudentList } from "./components/StudentList/StudentList";
import { AddDeleteStudents } from "./components/ModifyStudentList/ModifyStudentList";
import "./App.css";

function App() {
	return (
		<div className="App">
			<InfoStudents />
			<StudentList />
			<AddDeleteStudents />
		</div>
	);
}

export default App;
