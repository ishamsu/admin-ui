import React from "react";

const TableRow = ({ children, className }) => {
    return (
        <tr   className={className}>{children}</tr>
    );
};

export default TableRow;