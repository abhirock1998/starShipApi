import React, { useEffect, useState } from "react";
import "./pagination.css";
function Pagination({ pageNumber = 1,itemPerPage=0, totalNumberOfItem = 10000, click }) {
  const [isLoaded, setIsLoaded] = useState([]);
 

  useEffect(() => {
    var pageArray = [];
    const initialIndex = pageNumber * itemPerPage - itemPerPage;
    const finalIndex = initialIndex + itemPerPage;
    var totalNumberOfPage = Math.ceil(totalNumberOfItem / itemPerPage);
    for (let i = 1; i <= totalNumberOfPage; i++) {
      pageArray.push(i);
    }
    var data = pageArray.slice(initialIndex, finalIndex);
    setIsLoaded(data);
  }, [pageNumber, totalNumberOfItem,itemPerPage]);

  return (
    <div className="pagination">
      {isLoaded?.map((page) => (
        <button onClick={() => click(page)} key={page}>
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
