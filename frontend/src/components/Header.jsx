import React from "react";

export default function Header({ children }) {
  return (
    <h1 className="pb-4 font-medium text-[24px] text-[#365279]">{children}</h1>
  );
}
