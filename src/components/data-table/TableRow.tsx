import React from "react";
import { ActionButtons } from "./ActionButtons";

interface TableRowProps {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  registerDate: string;
}

export const TableRow: React.FC<TableRowProps> = ({
  id,
  fullName,
  phoneNumber,
  email,
  registerDate,
}) => {
  return (
    <tr className="border-t border-solid">
      <td className="text-[#111928] text-sm leading-5 p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
        {id}
      </td>
      <td className="text-[#111928] text-sm leading-5 p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
        {fullName}
      </td>
      <td className="text-[#111928] text-sm leading-5 p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
        {phoneNumber}
      </td>
      <td className="text-[#111928] text-sm leading-5 p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
        {email}
      </td>
      <td className="text-[#111928] text-sm leading-5 p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
        {registerDate}
      </td>
      <td className="text-[#111928] text-sm leading-5 p-4 max-md:text-[13px] max-md:p-3 max-sm:text-xs max-sm:p-2.5">
        <ActionButtons />
      </td>
    </tr>
  );
};
