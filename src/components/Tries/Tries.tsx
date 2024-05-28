import React from "react";
import './Tries.css';

interface TriesProps {
    clicks:number;
}

const Tries: React.FC<TriesProps> = ({ clicks }) => {
    return <span className={"tries"}>Tries: {clicks}</span>;
};

export default Tries;
