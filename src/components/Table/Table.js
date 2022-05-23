import React from "react";

const Table = ({children, className }) => {
    return (
        <table className={className}>{children}</table>
    );
};

export default Table;