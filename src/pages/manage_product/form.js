import React from "react";

export default function Form() {
  return (
    <div className="col-span-3 xl:col-span-1 pr-4 pl-0 xl:pl-9 sm:pr-9 relative h-auto xl:h-screen overflow-scroll py-9">
      <div className="flex justify-between">
        <p className="text-base font-bold">
          Codeathome <span className="font-normal">BookStore</span>
        </p>
      </div>

      <div className="rounded-lg shadow-1xl flex flex-col items-center justify-center py-24 mt-8">
        <svg
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.1429 16.0054L18.8459 23.4853L25.0164 33.1921L51.1424 23.625L44.1429 16.0054Z"
            fill="#D0D0D0"
          />
          <path
            d="M43.0807 7.6875L8.84959 17.1316C8.84959 17.1316 2.5625 16.9548 2.5625 23.6327C2.5625 26.3886 3.78481 28.4425 3.78481 28.4425L29.8634 72.0588C32.3567 76.0307 37.6521 73.5438 37.6521 73.5438L77.6412 54.0623L76.1447 52.5441C75.7923 50.7208 75.5873 47.3448 78.0627 44.8309C78.1178 44.7746 78.1281 44.6977 78.1575 44.6272L79.4375 44.1134L43.0807 7.6875ZM42.3223 10.5549L74.8865 43.1807L36.5566 59.2783L10.7305 19.1316L42.3223 10.5549ZM28.9383 65.5206L5.99881 27.1497C5.98856 27.1356 5.125 25.6007 5.125 23.6327C5.125 21.1368 6.34731 20.1874 7.54272 19.8555L33.7738 60.7735C31.7993 61.6281 29.593 63.5807 28.9383 65.5206ZM74.8404 48.8682C74.7571 49.4575 74.7148 50.0315 74.7238 50.5697L48.4723 63.0298L74.8173 51.8496C74.8429 52.0533 74.866 52.2583 74.898 52.4428L41.246 68.6968L75.1633 53.6549L75.1838 53.7343L37.6521 71.6885C37.6342 71.7 35.9211 72.611 34.2042 72.611C32.5079 72.611 31.4508 71.7398 30.9691 69.9486C29.7301 65.3463 36.7693 62.7377 36.8757 62.6992L75.8039 45.8572C75.5246 46.3697 75.3311 46.8912 75.1697 47.4114L50.4582 59.0438L74.8404 48.8682Z"
            fill="#B5B5B5"
          />
        </svg>
        <div className="relative">
          <input
            className="opacity-0 absolute inset-0 cursor-pointer"
            type="file"
          />
          <p className="text-center text-gray-culture mt-2">
            Click to select image
            <br />
            100 x 80 pixels
          </p>
        </div>
      </div>

      <form>
        <div className="mt-3">
          <input type="text" placeholder="Book title" className="input-field" />
        </div>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Book author/publisher"
            className="input-field"
          />
        </div>
        <div className="mt-3">
          <select
            name="category"
            className="input-field cursor-pointer text-gray-culture"
            id="category"
          >
            <option>Select category</option>
            <option>category 1</option>
            <option>category 2</option>
          </select>
        </div>
        <div className="mt-3">
          <input
            type="date"
            placeholder="Date published"
            className="input-field cursor-pointer text-gray-culture"
          />
        </div>
        <div className="mt-3">
          <input type="number" placeholder="Price" className="input-field" />
        </div>
        <div className="mt-3">
          <input
            type="number"
            placeholder="Available stock"
            className="input-field"
          />
        </div>

        <button className="btn-violet">Submit</button>
      </form>
    </div>
  );
}
