import React from "react";

export default function ApplicationLogo({ className = "" }) {
  return (
    <span
      className={`grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 ${className}`}
    >
      L
    </span>
  );
}
