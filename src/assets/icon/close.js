import React from "react";

export default function Close({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className="absolute top-3 right-5 cursor-pointer"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0.9625L10.0375 0L5.5 4.5375L0.9625 0L0 0.9625L4.5375 5.5L0 10.0375L0.9625 11L5.5 6.4625L10.0375 11L11 10.0375L6.4625 5.5L11 0.9625Z"
        fill="black"
      />
    </svg>
  );
}
