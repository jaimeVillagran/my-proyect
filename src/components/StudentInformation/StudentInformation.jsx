import React from "react";
import { University } from "../data";
import s from "./styles.module.css";

const InfoStudents = () => {
	const students = University[0].students;

	return (
		<div>
			<h1 className={s.titlePrimary}>{University[0].name}</h1>
			<div className={s.container}>
				{students.map((student) => (
					<div key={student.id} className={s.card}>
						<h2 className={s.titleSecondary}>{student.name}</h2>
						<p className={s.paragraph}>Title: {student.title}</p>
						<span className={s.inline}> Evaluations:</span>
						{student.evaluations.filter((evaluation) => {
							return index === student.evaluations.length - 1 ? (
								<span className={s.inline}> {evaluation} </span>
							) : (
								<span className={s.inline}> {evaluation + " , "}</span>
							);
						})}
						<p className={s.paragraph}>Duration: {student.duration} years</p>
					</div>
				))}
			</div>
		</div>
	);
};

export { InfoStudents };
