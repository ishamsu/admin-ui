import React from "react";
import { DeleteIcon, EditIcon } from "../../assets/images/const";
import Button from "../../components/Button/Button";
import CheckBox from "../../components/CheckBox/CheckBox";
import TableHeadItem from "../../components/TableHeadItem/TableHeadItem";
import TableDataCell from "../../components/TableDataCell/TableDataCell";
import TableRow from "../../components/TableRow/TableRow";
import "./table-wrapper.css"
import TableHead from "../../components/TableHead/TableHead";
import TableBody from "../../components/TableBody/TableBody";
import Table from "../../components/Table/Table";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";


const sliceData = (data, id) => {
    let tempData = [...data]
    for (var i = 0; i < tempData.length; i++) {
        if (tempData[i].id === id) {
            console.log("operation", tempData[i].id)
            tempData.splice(i, 1);
            data.splice(i, 1);
            return tempData
        }
    }
};



const TableWrapper = ({ tbodyData, setData, openModal, checked, setChecked, data, theadData}) => {
    return (
        <>
        <div className="x-auto">
        <ErrorBoundary>
            <Table className="table">
                <TableHead className="table__row-header">
                    <TableRow>
                    {theadData?.map((item,key) => {
                        return <TableHeadItem className="table__header" item={item} key ={key} />
                    })}
                        
                    </TableRow>
                </TableHead>

                <TableBody>
                    {tbodyData?.map((el) => (
                        <TableRow className="table__row-items" key={el?.id} >
                            <TableDataCell  className="table__cell">
                                <CheckBox checked={checked.includes(el.id) ? true : false} onChange={(e) => {
                                    let tempChecked = [...checked]
                                    if (e.currentTarget.checked == true) {
                                        tempChecked.push(el.id)
                                    }
                                    else {
                                        let objIndex = tempChecked.findIndex((obj => obj == el?.id));
                                        tempChecked.splice(objIndex, 1)
                                    }
                                    setChecked([...tempChecked])
                                }} />
                            </TableDataCell>
                            <TableDataCell className="table__cell">
                                {el.name}
                            </TableDataCell>

                            <TableDataCell className="table__cell">
                                {el.email}
                            </TableDataCell>

                            <TableDataCell className="table__cell">
                                {el.role}
                            </TableDataCell>

                            <TableDataCell className="table__cell d-flex flex-row">
                                <Button isDisabled={false} className="button--circle" icon={<EditIcon color="gray" />} onClick={() => {
                                    openModal(el.id)
                                }} />
                                <Button isDisabled={false} className="button--circle" icon={<DeleteIcon color="red" />}
                                    onClick={() => {
                                        let tempSliceData = sliceData(data, el.id)
                                        setData([...tempSliceData])
                                    }}
                                />
                            </TableDataCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </ErrorBoundary>

            </div>
        </>
    );
};




export default TableWrapper;