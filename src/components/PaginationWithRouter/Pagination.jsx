import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { range } from "../../utils";
const PaginationItem = ({ page, url }) => {
  return (
    <li>
      <Link to={`${url}?page=${page}`}>
        {page}
      </Link>
    </li>
  );
};

const Pagination = ({ url, currentPage, total, limit }) => {
  const history = useHistory();
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);


  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


  const handlePrevbtn = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    history.push(`${url}?page=${Number(currentPage - 1)}`);
  };

  const handleNextbtn = () => {
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    history.push(`${url}?page=${currentPage + 1}`);
  };


  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={handlePrevbtn}
          disabled={currentPage === pages[0] ? true : false}
        >
          Prev
        </button>
      </li>
      {pageDecrementBtn}
      {pages.map((page) => {
        if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
          return (
            <PaginationItem
              page={page}
              key={page}
              currentPage={currentPage}
              url={url}
              className={currentPage === page ? "active" : null}
            />
          );
        } else {
          return null;
        }
      })}
      {pageIncrementBtn}
      <li>
        <button
          onClick={handleNextbtn}
          disabled={currentPage === pages[pages.length - 1] ? true : false}
        >
          Next
        </button>
      </li>
      ;
    </ul>
  );
};
export default Pagination;
