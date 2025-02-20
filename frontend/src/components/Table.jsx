import React from "react";

export default function Table({ tableHeader, colSpan, tableData }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="bg-[#365279] ">
            {tableHeader.map((row, index) => {
              return (
                <th
                  colSpan={colSpan}
                  key={index}
                  className="px-4 py-2 font-medium whitespace-nowrap text-white text-center"
                >
                  {row}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {tableData.map((cols, index) => {
            return (
              <tr key={index}>
                {cols.map((cell, cellIndex) => {
                  return (
                    <td
                      key={cellIndex}
                      className="px-4 py-2 font-medium whitespace-nowrap text-gray-700 text-center"
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
