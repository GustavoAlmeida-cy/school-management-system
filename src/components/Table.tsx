import React from "react";

const Table = ({
  columns,
}: {
  columns: { header: string; accessor: string; className?: string }[];
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
    </table>
  );
};

export default Table;
