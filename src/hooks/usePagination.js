import { useState, useEffect } from "react";


// range for showing pages based on rowsPerPage and data

const findRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data?.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

//  slice data from original array based on rowsPerPage for shwoing in each page

const sliceData = (data, page, rowsPerPage) => {
  return  data.slice((page - 1) * rowsPerPage, page * rowsPerPage) ;
};

const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);
  useEffect(() => {
    const range = findRange(data, rowsPerPage);

    // inlcude these symbols in range for next, previous, first and last page
    range.unshift("<") 
    range.unshift("<<")
    range.push(">")
    range.push(">>")
    setTableRange([...range]);
    const slice = sliceData(data, page, rowsPerPage);
    setSlice( [...slice]);
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange, setSlice };
};

export default useTable;