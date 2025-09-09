import React from "react";
import "./Pagination.scss";

/**
 * props:
 * - currentPage (number)
 * - totalPages (number)
 * - onPageChange (fn(page: number))
 */

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPageRange = () => {
    const delta = 2;
    let start = Math.max(1, currentPage - delta);
    let end = Math.min(totalPages, currentPage + delta);

    if (currentPage - start < delta) {
      end = Math.min(totalPages, end + (delta - (currentPage - start)));
    }

    if (end - currentPage < delta) {
      start = Math.max(1, start - (delta - (end - currentPage)));
    }

    const range = [];
    for (let i = start; i <= end; i++) range.push(i);
    return { start, end, range };
  };

  const { range } = getPageRange();

  const handleClick = (page) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  return (
    <>
      <nav className="pagination" aria-label="Pagination">
        <button
          className="pagination_btn"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          Prev
        </button>

        {range[0] > 1 && (
          <>
            <button className="pagination_page" onClick={() => handleClick(1)}>
              1
            </button>
            {range[0] > 2 && <span className="pagination_dots">...</span>}
          </>
        )}

        {range.map((p) => (
          <>
            <button
              key={p}
              className={`pagination_page ${
                p === currentPage ? "is-active" : ""
              }`}
              onClick={() => handleClick(p)}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </button>
          </>
        ))}

        {range[range.length - 1] < totalPages && (
          <>
            {range[range.length - 1] < totalPages - 1 && (
              <span className="pagination_dots">...</span>
            )}
            <button
              className="pagination_page"
              onClick={() => handleClick(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          className="pagination_btn"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          Next
        </button>
      </nav>
    </>
  );
}

export default Pagination;
