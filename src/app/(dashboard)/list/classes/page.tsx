"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  { header: "Class Name", accessor: "name", className: "p-2" },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "p-2",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell p-2",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell p-2",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "p-2",
  },
];

const ClassesListPage = () => {
  const renderRow = (
    item: Class,
    column: { header: string; accessor: string; className?: string }
  ) => {
    switch (column.accessor) {
      case "info":
        return (
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.grade}</p>
            </div>
          </div>
        );

      case "capacity":
        return item.capacity;

      case "supervisor":
        return item.supervisor;

      case "actions":
        return (
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky">
                <Image src="/edit.png" alt="view" width={15} height={15} />
              </button>
            </Link>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" alt="delete" width={15} height={15} />
              </button>
            )}
          </div>
        );

      default:
        return item[column.accessor as keyof Class] || "";
    }
  };

  return (
    <div className="bg-white py-4 px-6 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end mb-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="filter" width={15} height={15} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="sort" width={15} height={15} />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/plus.png" alt="add" width={15} height={15} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default ClassesListPage;
