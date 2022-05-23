import React from "react";

const TableHeadItem = ({ className, item }) => {
    return (
        <>
                    <th   className= {className}>{item}</th>
        </>
    );
};

export default TableHeadItem;