import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
            <div>
                <h1><Link to="/soda">Soda</Link></h1>
                <h1><Link to="/chips">Chips</Link></h1>
                <h1><Link to="/sardines">Sardines</Link></h1>
            </div>
    )
};

export default VendingMachine;