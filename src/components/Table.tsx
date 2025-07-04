import React from "react";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (
    item: any,
    column: { header: string; accessor: string; className?: string }
  ) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left capitalize text-gray-500 text-sm">
          {columns.map((column) => (
            <th
              key={column.accessor}
              className={`text-left p-2 ${column.className || ""}`}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="border-b hover:bg-lamaPurpleLight even:bg-slate-50"
          >
            {columns.map((column) => (
              <td
                key={column.accessor}
                className={`p-2 ${column.className || ""}`}
              >
                {renderRow(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
