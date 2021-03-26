import React from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const history = useHistory();

  const pageChangeHandler = ({ selected }) => {
    history.push(`${url}?page=${selected + 1}`);
  };

  return (
    <div>
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      forcePage={currentPage - 1}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pagesCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={pageChangeHandler}
      containerClassName={"pagination"}
      activeClassName={"active"}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
    />
    </div>
  );
};

export default Pagination;
