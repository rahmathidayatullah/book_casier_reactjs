import React from "react";
import IconClose from "../../assets/icon/close";
import IconSukses from "../../assets/icon/checklist";

export default function Add({ closeNotif }) {
  return (
    <div>
      <IconClose onClick={closeNotif} />
      <div className="relative">
        <div className="flex items-center">
          <p className="font-bold text-base mr-2">Successfully</p>
          {/* icon suksess */}
          <IconSukses />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">
            <span className="font-bold text-green-mantis">"Faktor lates"</span>
            has been successfully added into the book list
          </p>
        </div>
      </div>
    </div>
  );
}
