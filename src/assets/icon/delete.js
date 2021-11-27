import React from "react";

export default function Delete({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className="absolute top-4 right-4 cursor-pointer"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.1665 4.75H15.8332L14.5823 16.0075C14.5395 16.3949 14.3552 16.7529 14.0648 17.0129C13.7744 17.2729 13.3983 17.4167 13.0085 17.4167H5.99117C5.60138 17.4167 5.22528 17.2729 4.93489 17.0129C4.64449 16.7529 4.46021 16.3949 4.41734 16.0075L3.1665 4.75Z"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.81479 2.49139C5.94285 2.21982 6.14548 1.99026 6.39905 1.82948C6.65262 1.6687 6.94667 1.58334 7.24692 1.58334H11.7531C12.0535 1.58319 12.3477 1.66848 12.6014 1.82927C12.8551 1.99005 13.0579 2.2197 13.186 2.49139L14.25 4.75001H4.75L5.81479 2.49139Z"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.58325 4.75H17.4166"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.9165 8.70834V12.6667"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0833 8.70834V12.6667"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
