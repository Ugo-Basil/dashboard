import React from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import "tailwindcss/tailwind.css";
import Button from "./Button";
import { AiOutlineCloudDownload, AiOutlineCheck } from "react-icons/ai";

const DataTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "INVOICE", accessor: "invoice" },
      { Header: "Amount", accessor: "amount" },
      { Header: "DATE", accessor: "date" },
      {
        Header: "STATUS",
        accessor: "status",
        Cell: ({ cell }) => (
          <span
            style={{
              backgroundColor: cell.value === "Paid" ? "#ECFDF3" : "#53389E",
              color: cell.value === "Paid" ? "#027A48" : "#ffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.1rem",
              borderRadius: "20px",
            }}
          >
            {cell.value === "Paid" && (
              <AiOutlineCheck
                style={{ marginRight: "0.5rem" }}
                color="#12B76A"
              />
            )}
            {cell.value}
          </span>
        ),
      },
      {
        Header: "USERS ON PLAN",
        accessor: "usersOnPlan",
        Cell: ({ cell }) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={cell.value}
              alt="User Avatar"
              style={{  objectFit: "cover" }}
            />
          </div>
        ),
      },
      {
        Header: "ACTION",
        accessor: "action",
        Cell: ({ cell }) => (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.1rem",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            {cell.value}
          </span>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize },
    toggleAllRowsSelected,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: () => (
            <input
              type="checkbox"
              onChange={(e) => toggleAllRowsSelected(e.target.checked)}
              indeterminate="false"
            />
          ),
          Cell: ({ row }) => (
            <input
              type="checkbox"
              {...row.getToggleRowSelectedProps()}
              checked={row.isSelected}
              indeterminate="false"
            />
          ),
        },
        ...columns,
      ]);
    }
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-between md:items-center items-start mb-3">
        <h1 className="font-bold text-2xl mb-2 md:mb-0">Billing History</h1>
        <div className="md:ml-auto">
          <Button
            label="Download all"
            icon={<AiOutlineCloudDownload size={24} />}
          />
        </div>
      </div>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200 text-center"
        >
          <thead className="">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-[#F9FAFB] "
              >
                {headerGroup.headers.map(
                  (column, index) =>
                    (index < 3 || window.innerWidth >= 768) && (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className="p-3 font-semibold text-center"
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
                      </th>
                    )
                )}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-t border-gray-300">
                  {row.cells.map(
                    (cell, index) =>
                      (index < 3 || window.innerWidth >= 768) && (
                        <td {...cell.getCellProps()} className="p-3">
                          {cell.render("Cell")}
                        </td>
                      )
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <Button
              label="Previous"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            />
            <Button
              label="Next"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            />
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:justify-between">
            <Button
              label="Previous"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            />
            <div className="flex justify-center items-center">
              Page{" "}
              <span className="font-medium">
                {pageIndex + 1} of {Math.ceil(data.length / pageSize)}
              </span>
            </div>
            <Button
              label="Next"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
