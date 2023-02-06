import React from "react";
import { University } from "../data";
import "./StudentList.css";

const StudentList = () => {
	const students = University[0].students;

	return (
		<div>
			<ul className="student-list">
				<h2>List Stundent</h2>
				{students.map((student) => (
					<li key={student.name}>{student.name}</li>
				))}
			</ul>
		</div>
	);
};

export { StudentList };
