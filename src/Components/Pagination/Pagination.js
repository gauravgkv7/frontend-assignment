import React from 'react'
import './Pagination.css'

export default function Pagination({ pageSize = 5, canPreviousPage,  setPageSize, previousPage,pageIndex, pageOptions, nextPage, canNextPage   }) {
  return (
    <div
        className="pagination-container"
      >
        {/* Page Size Selector */}
        <div
          className="pagination-container"
        >
          <div>
            <label>
              Show{" "}
              <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[5, 10, 20, 30].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>{" "}
              entries
            </label>
          </div>

        </div>

        {/* Pagination Buttons */}
        <div>
          <button
            className="pagination-button"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"} Previous
          </button>
          <span className="pagination-info">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <button
            className="pagination-button"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next {">"}
          </button>
        </div>
      </div>
  )
}
