import React, { useEffect, useState } from "react";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../modules/Pagination/Pagination";
import "./home.css"
import Button from "../../components/Button/Button";
import { DeleteIcon, NoDataFoundIcon, SearchIcon } from "../../assets/images/const";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Popup from "../../components/Popup/Popup";
import useForm from "../../hooks/useForm";
import CheckBox from "../../components/CheckBox/CheckBox";
import TableWrapper from "../../modules/TableWrapper/TableWrapper";
import useModal from "../../hooks/useModal";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import FallBack from "../FallBack/FallBack";

const sliceData = (data, checked) => {
    let tempData = [...data]
    checked.map((item) => {
        for (var i = 0; i < tempData?.length; i++) {
            if (tempData[i].id == item) {
                console.log("operation", tempData[i]?.id, item)
                tempData.splice(i, 1);
                data.splice(i, 1);
            }
        }
    })
    return tempData
}
const Home = ({ data, rowsPerPage, setData, apiData }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = usePagination(data, page, rowsPerPage);
    const [checked, setChecked] = useState([]);
    const [value, setValue, handleChange] = useForm()
    const { isShowing, toggle } = useModal();

    useEffect(() => {
        setChecked([])
    }, [page])

    useEffect(() => {
        if (value?.search) {

            let FilterSearchData = apiData.filter((item) => {
                return item?.name.toLowerCase().startsWith(value?.search.toLowerCase()) || item?.email.toLowerCase().startsWith(value?.search.toLowerCase()) || item?.role.toLowerCase().startsWith(value?.search.toLowerCase());
            })
            setData([...FilterSearchData])
        }
        else {
            setData([...apiData])
        }

    }, [value.search])


    const openModal = (id) => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                setValue({ ...value, ["id"]: data[i].id, ["name"]: data[i].name, ["email"]: data[i].email, ["role"]: data[i].role })
            }
        }
        toggle();
    }

    const closeModal = () => {
        toggle()
    }

    // header data defined here

    const theadData = [<CheckBox checked={checked.length == 10 ? true : false} onChange={(e) => {
        console.log("checked rer", checked)
        let tempChecked;
        if (e.currentTarget.checked == true) {
            tempChecked = slice.map((item) => {
                return item.id
            })
        }
        else {
            tempChecked = []
        }
        console.log("checked tempChecked", tempChecked)
        setChecked([...tempChecked])
    }}
    />, "Name", "Email", "Role", "Actions"]


    return (
        <>
            {isShowing && (
                <>
                    <ErrorBoundary>
                        <Popup heading="Edit user"
                            closeModal={toggle}
                        >
                            <Label value="Name:-" />
                            <Input
                                className="input-bottom-line"
                                value={value?.name || ""}
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                handleChange={handleChange}
                            />
                            <Label value="Email:-" />
                            <Input
                                className="input-bottom-line"
                                value={value?.email || ""}
                                type="text"
                                placeholder="Enter email"
                                name="email"
                                handleChange={handleChange}

                            />
                            <Label value="Role:-" />
                            <Input
                                className="input-bottom-line"
                                value={value?.role || ""}
                                type="text"
                                placeholder="Enter Role"
                                name="role"
                                handleChange={handleChange}

                            />
                            <Button
                                isDisabled={value.name && value.email && value.role ? false : true}
                                className={value.name && value.email && value.role ? "button--primary" : "button--primary button--disable"}
                                label="Save"
                                onClick={() => {
                                    let objIndex = data.findIndex((obj => obj?.id == value?.id));
                                    data[objIndex].name = value?.name
                                    data[objIndex].email = value?.email
                                    data[objIndex].role = value?.role
                                    closeModal()
                                }}
                            />
                        </Popup>
                    </ErrorBoundary>

                </>
            )}


            <div className="mt-4 mb-1 d-flex x-center">
                <ErrorBoundary>

                    <Input
                        className="input--search"
                        value={value?.search || ""}
                        type="text"
                        placeholder="Search by name, email or role"
                        name="search"
                        handleChange={handleChange}
                        icon= {<SearchIcon color="white"/>}
                        />
                </ErrorBoundary>

            </div>

            <div className="mb-6">

                <ErrorBoundary>
                    {data?.length == 0 ? <FallBack
                        heading={"Oooops!"}
                        icon={<NoDataFoundIcon />
                        }
                        subHeading={"No data Found."}
                    /> :

                        <TableWrapper
                            theadData={theadData}
                            tbodyData={slice}
                            setData={setData}
                            openModal={openModal}
                            checked={checked}
                            setChecked={setChecked}
                            data={data}
                            range={range}
                            slice={slice}
                            setPage={setPage}
                            page={page}
                        />
                    }
                </ErrorBoundary>

            </div>


            <div className="btn__wrapper">
                <ErrorBoundary>
             
                {data?.length !== 0 &&   <Button
                        isDisabled={false}
                        className={"button--danger"}
                        label={checked.length >= 1 ? `Delete selected` : "Delete"}
                        icon={<DeleteIcon
                            color="white"
                            width="20"
                        />}
                        onClick={() => {
                            let tempSliceData = sliceData(data, checked)
                            setData([...tempSliceData])
                            checked.length = 0
                        }} />}
                </ErrorBoundary>

            </div>

            <div className="pagination__wrapper">
                <ErrorBoundary>
                {data?.length !== 0 &&
                    <Pagination range={range} slice={slice} setPage={setPage} page={page} />
                }
                </ErrorBoundary>

            </div>
        </>
    );
};

export default Home;