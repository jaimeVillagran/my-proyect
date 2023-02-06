import React from "react";
import { University } from "../data";
import "./StudentInformation.css";

const InfoStudents = () => {
	const students = University[0].students;

	return (
		<div>
			<h1>{University[0].name}</h1>
			<div className="container">
				{students.map((student) => (
					<div key={student.name} className="card">
						<h2>{student.name}</h2>
						<p>Title: {student.title}</p>
						<p>
							Evaluations:{" "}
							{student.evaluations.map((evaluation, index) => {
								return index === student.evaluations.length - 1
									? evaluation
									: evaluation + ", ";
							})}
						</p>
						<p>Duration: {student.duration} years</p>
					</div>
				))}
			</div>
		</div>
	);
};

export { InfoStudents };
