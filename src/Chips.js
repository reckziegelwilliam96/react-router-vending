import React from "react";
import Counter from "./helper";
import { Link } from "react-router-dom";

const Chips = () => {
    return (
        <div>
            <h1>Chips</h1>
            <p>Crunchy and salty!</p>
            <h2>Eat Me</h2>
            <Counter />
            <Link to="/">Go back</Link>
        </div>
    );
};

export default Chips;