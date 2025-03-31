import React from "react";
import { TableRow } from "./TableRow";

const mockData = [
  {
    id: "#2545",
    fullName: "Sara Smith",
    phoneNumber: "+1 555 5555 555",
    email: "teset@test.com",
    registerDate: "25 Aug 2024",
  },
  {
    id: "#2545",
    fullName: "Sara Smith",
    phoneNumber: "+1 555 5555 555",
    email: "teset@test.com",
    registerDate: "25 Aug 2024",
  },
  {
    id: "#2545",
    fullName: "Sara Smith",
    phoneNumber: "+1 555 5555 555",
    email: "teset@test.com",
    registerDate: "25 Aug 2024",
  },
  {
    id: "#2545",
    fullName: "Sara Smith",
    phoneNumber: "+1 555 5555 555",
    email: "teset@test.com",
    registerDate: "25 Aug 2024",
  },
  {
    id: "#2545",
    fullName: "Sara Smith",
    phoneNumber: "+1 555 5555 555",
    email: "teset@test.com",
    registerDate: "25 Aug 2024",
  },
  {
    id: "#2545",
    fullName: "Sara Smith",
    phoneNumber: "+1 555 5555 555",
    email: "teset@test.com",
    registerDate: "25 Aug 2024",
  },
  {
    id: "#2545",
    fullName: "Sara Smith",
    phoneNumber: "+1 555 5555 555",
    email: "teset@test.com",
    registerDate: "25 Aug 2024",
  },
  {
    id: "#2545",
    fullName: "Sara Smith",
    phoneNumber: "+1 555 5555 555",
    email: "teset@test.com",
    registerDate: "25 Aug 2024",
  },
];

export const DataTable: React.FC = () => {
  return (
    <div className="p-5 max-md:p-[15px] max-sm:overflow-x-auto max-sm:p-2.5">
      <div className="w-full bg-white rounded-lg border border-solid border-[#DFDFDF] max-sm:min-w-[800px]">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left text-gray-500 text-xs font-medium p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
                ID
              </th>
              <th className="text-left text-gray-500 text-xs font-medium p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
                Full Name
              </th>
              <th className="text-left text-gray-500 text-xs font-medium p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
                Phone Number
              </th>
              <th className="text-left text-gray-500 text-xs font-medium p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
                Email Address
              </th>
              <th className="text-left text-gray-500 text-xs font-medium p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
                Register Date
              </th>
              <th className="text-left text-gray-500 text-xs font-medium p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <TableRow
                key={`${row.id}-${index}`}
                id={row.id}
                fullName={row.fullName}
                phoneNumber={row.phoneNumber}
                email={row.email}
                registerDate={row.registerDate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
