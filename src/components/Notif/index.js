import React from "react";

export default function Notification({ children = "test", show = false }) {
  return (
    <div
      className={`fixed ${
        show ? "left-0" : "-left-full"
      } bg-white bottom-4 left-4 transition-all duration-600 shadow-1xl p-8 z-10 rounded-xl`}
      style={{ width: "750px" }}
    >
      {children}
    </div>
  );
}
