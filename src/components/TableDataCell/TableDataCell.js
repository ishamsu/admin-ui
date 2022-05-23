import React, { Children } from "react";

const TableDataCell = ({ key, children, className }) => {
    return (
        <td key={key} className={className}>{children}</td>
    );
};

export default TableDataCell;