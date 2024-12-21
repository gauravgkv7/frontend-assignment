import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import "./Table.css";
import Pagination from "../Pagination/Pagination";

const Table = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Application No.", accessor: "applicationNO" },
      { Header: "Application Name", accessor: "applicantName" },
      { Header: "Application Date", accessor: "applicationDate" },
      { Header: "Student ID", accessor: "studentID" },
      { Header: "Paid Amount", accessor: "paidAmount" },
      { Header: "Status (English)", accessor: "status_En" },
      { Header: "Status (Arabic)", accessor: "status_Ar" },
      { Header: "Last Updated Date", accessor: "lastDate" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Use `page` instead of `rows` for pagination
    prepareRow,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    setPageSize,
    pageOptions,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <div className="table-container">
        <table {...getTableProps()} className="custom-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="header-row">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="header-cell"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="body-row">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="body-cell">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        pageSize={pageSize ?? 5}
        canPreviousPage={canPreviousPage}
        setPageSize={setPageSize}
        previousPage={previousPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        nextPage={nextPage}
        canNextPage={canNextPage}
      />
    </div>
  );
};

export default Table;
