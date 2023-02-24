import React from "react";
import { University } from "../data";
import s from "./styles.module.css";

const StudentList = () => {
	const students = University[0].students;

	return (
		<div>
			<ul className={s.studentList}>
				<h2 className={s.secondaryHeader}>List Stundent</h2>
				{students.map((student) => (
					<li className={s.itemList} key={student.name}>
						{student.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export { StudentList };
