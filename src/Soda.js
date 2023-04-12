import React from "react";
import Counter from "./helper";
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div>
            <h1>Sardines</h1>
            <p>Tasty and fishy!</p>
            <h2>Drink Me</h2>
            <Counter />
            <Link to="/">Go back</Link>
        </div>
    );
};

export default Soda;