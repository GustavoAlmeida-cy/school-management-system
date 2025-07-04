"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Student = {
  id: string;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  grade: number;
  class: string;
  address: string;
  phone?: string;
};

const columns = [
  { header: "info", accessor: "info", className: "p-2" },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell p-2",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell p-2",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell p-2",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell p-2",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell p-2",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "p-2",
  },
];

const StudentsListPage = () => {
  const renderRow = (
    item: Student,
    column: { header: string; accessor: string; className?: string }
  ) => {
    switch (column.accessor) {
      case "info":
        return (
          <div className="flex items-center gap-2">
            <Image
              src={item.photo}
              alt="teacher photo"
              width={40}
              height={40}
              className="md:hidden xl:block w-10 h-10 object-cover rounded-full mr-2"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.class}</p>
            </div>
          </div>
        );

      case "studentId":
        return item.studentId;

      case "grade":
        return item.grade;

      case "class":
        return item.class;

      case "phone":
        return item?.phone;

      case "address":
        return item.address;

      case "actions":
        return (
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky">
                <Image src="/view.png" alt="view" width={15} height={15} />
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
        return item[column.accessor as keyof Student] || "";
    }
  };

  return (
    <div className="bg-white py-4 px-6 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
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
      <Table columns={columns} renderRow={renderRow} data={studentsData} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default StudentsListPage;
