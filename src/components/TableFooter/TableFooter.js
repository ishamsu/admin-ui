import React from "react";

const TableFooter = ({ className, children }) => {
    return (
        <>
                    <tfoot className= {className}>{children}</tfoot>
        </>
    );
};

export default TableFooter;