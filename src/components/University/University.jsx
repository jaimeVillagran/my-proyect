import React from "react";
import { University } from "../data";
import "./University.css";

const NameUniversity = () => {
	return <h1>{University[0].name}</h1>;
};

export { NameUniversity };
