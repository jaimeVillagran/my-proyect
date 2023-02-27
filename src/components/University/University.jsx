import React from "react";
import { University } from "../data";
import s from "./styles.module.css";

const NameUniversity = () => {
	return <h1 className={s.mainHeader}>{University[0].name}</h1>;
};

export { NameUniversity };
