import React, { useState } from "react";
import { University } from "../data";
import "./ModifyStudentList.css";

const AddDeleteStudents = () => {
	const [students, setStudents] = useState(University[0].students);
	const [newStudent, setNewStudent] = useState({
		name: "",
		Title: "",
		evaluations: [],
		duration: 0,
	});

	const handleChange = (event) => {
		setNewStudent({ ...newStudent, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setStudents([...students, newStudent]);
		setNewStudent({
			name: "",
			Title: "",
			evaluations: [],
			duration: 0,
		});
	};

	return (
		<div>
			<dir className="Form">
				<h2> Form Student New </h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={newStudent.name}
						onChange={handleChange}
					/>
					<br />
					<label htmlFor="Title">Title:</label>
					<input
						type="text"
						id="Title"
						name="Title"
						value={newStudent.Title}
						onChange={handleChange}
					/>
					<br />
					<label htmlFor="evaluations">Evaluations:</label>
					<input
						type="text"
						id="evaluations"
						name="evaluations"
						value={newStudent.evaluations}
						onChange={handleChange}
					/>
					<br />
					<label htmlFor="duration">Duration:</label>
					<input
						type="number"
						id="duration"
						name="duration"
						value={newStudent.duration}
						onChange={handleChange}
					/>
					<br />
					<button type="submit">Add student</button>
				</form>
			</dir>
			<ul>
				{students.map((student) => (
					<li key={student.name}>
						{student.name}
						<button
							onClick={() =>
								setStudents(students.filter((a) => a !== student))
							}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export { AddDeleteStudents };
