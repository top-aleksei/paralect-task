import React, { useState, useEffect } from "react";
import s from "./paginator.module.css";
import ReactPaginate from "react-paginate";

const Paginator = ({ getRepos, user, setRepos }) => {
  let [currentPage, setCurrentPage] = useState(1);
  let numOfPages = Math.ceil(user.public_repos / 4);

  const handlePageClick = (data) => {
    setRepos(null);
    setCurrentPage(data.selected + 1);
    getRepos(user.login, data.selected + 1);
    console.log(data);
    console.log(currentPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [user]);

  return (
    <div className={s.pagination_box}>
      <p className={s.selected_items}>
        {currentPage * 4 - 3}-
        {currentPage == numOfPages ? user.public_repos : 4 * currentPage} of{" "}
        {user.public_repos} items
      </p>
      <ReactPaginate
        pageCount={numOfPages}
        previousLabel={"<"}
        nextLabel={">"}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={s.paginator_Container}
        pageClassName={s.paginator_button}
        activeClassName={s.active}
        previousClassName={s.paginator_direction_button}
        nextClassName={s.paginator_direction_button}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default Paginator;
