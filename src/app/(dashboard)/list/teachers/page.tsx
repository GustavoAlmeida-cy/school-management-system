import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Teacher = {
  id: string;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  subjects: string[];
  classes: string[];
  address: string;
  phone: string;
};

const columns = [
  { header: "info", accessor: "info", className: "p-2" }, // Added p-2 to match table cell styling
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell p-2", // Added p-2
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell p-2", // Added p-2
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell p-2", // Added p-2
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell p-2", // Added p-2
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell p-2", // Added p-2
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell p-2", // Added p-2
  },
];

const TeacherListPage = () => {
  // renderRow should accept both the item (row data) and the column (current column)
  const renderRow = (
    item: Teacher,
    column: { header: string; accessor: string; className?: string }
  ) => {
    switch (column.accessor) {
      case "info":
        return (
          <div className="flex items-center gap-2">
            {/* Added flex container */}
            <Image
              src={item.photo}
              alt="teacher photo"
              width={40}
              height={40}
              className="md:hidden xl:block w-10 h-10 object-cover rounded-full mr-2"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item?.email}</p>
            </div>
          </div>
        );
      case "teacherId":
        return item.teacherId;
      case "subjects":
        return item.subjects.join(",");
      case "classes":
        return item.classes.join(",");
      case "phone":
        return item.phone;
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
              // This button should not be inside the Link if it's for deletion.
              // It also needs a unique key if mapped, but here it's static.
              // If it triggers an action, it should be a standalone button.
              // For demonstration, moving it outside the Link.
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" alt="delete" width={15} height={15} />
              </button>
            )}
          </div>
        );
      default:
        // Fallback for other accessors, though all are covered above
        // Make sure `item[column.accessor]` is safe or handle cases where it might be undefined
        return item[column.accessor as keyof Teacher] || "";
    }
  };

  return (
    <div className="bg-white py-4 px-6 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end mb-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="filter" width={15} height={15} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="filter" width={15} height={15} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="add" width={15} height={15} />
            </button>
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
