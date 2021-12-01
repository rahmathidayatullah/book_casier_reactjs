import React from "react";
import IconClose from "../../assets/icon/close";
export default function Delete({ closeNotif, handleDelete }) {
  return (
    <div>
      <IconClose onClick={closeNotif} />
      <div className="relative">
        <p className="font-bold text-base">Are you sure?</p>
        <div className="flex items-center justify-between">
          <p className="text-sm">
            Delete the book
            <span className="font-bold text-orange-pumkin">"Faktor lates"</span>
            this action cannot be undone
          </p>
          <button
            className="py-2 px-4 rounded-md text-white font-semibold text-sm bg-red-dragon"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
