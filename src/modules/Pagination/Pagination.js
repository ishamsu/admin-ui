import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import "./pagination.css"

const Pagination = ({ range, setPage, page, slice }) => {

  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (

<>  <div className="pagination">
   {range.map((el) => (
        <Button key ={el}
        isDisabled={false}
          className={`button--circle ${
          (page ==1 && (el =="<" || el=="<<")) || (page==range.length-4 && (el ==">" || el==">>")) || range.length==4 ? "button--disable":  page === el ? "button--active" : "button--inactive"
          }`}
             onClick={() => 
            {
                if(el==">" && page !== range.length-4){
                    setPage(page+1)
                }
                else if(el=="<" && page!==1){
                    setPage(page-1)
                }
                else if(el==">>" && page !== range.length-4){
                    setPage(range.length-4)
                }
                else if(el=="<<" && page !== 1){
                    setPage(1)
                }
                else if(el!=="<" && el!==">" && el!=="<<" && el!==">>"){
                    setPage(el)
                }
            }}
            label={el}
        />
      ))}
     </div>
    </>
  );
};

export default Pagination;