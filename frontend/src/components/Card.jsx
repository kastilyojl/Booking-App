import React, { Children } from "react";

export default function Card({ className = "", children }) {
  return (
    <div className={`bg-white sm:p-4 rounded-lg shadow ${className}`}>
      {children}
    </div>
  );
}
