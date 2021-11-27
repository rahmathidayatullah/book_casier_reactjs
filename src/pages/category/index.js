import React, { useEffect } from "react";
import { fetchCategory } from "../../features/category/actions";
import { useDispatch, useSelector } from "react-redux";
export default function Category() {
  const dispatch = useDispatch();
  // const category = useSelector((state) => state.category);
  // console.log("category", category);
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className="pl-24 sm:pl-32">
      <div className="grid grid-cols-3">
        <div className="col-span-3 xl:col-span-2 pr-4 sm:pr-9 py-9 border-r overflow-scroll h-auto xl:h-screen relative">
          <p className="text-xl">Category Managment</p>

          <div className="relative mt-8 group text-gray-culture focus-within:text-violet-purple duration-300">
            <input
              type="text"
              placeholder="Search book..."
              className="input-field"
            />

            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <path
                d="M9.16666 16.5C10.7937 16.4997 12.3739 15.955 13.6556 14.9527L17.6852 18.9823L18.9814 17.6862L14.9517 13.6565C15.9546 12.3747 16.4996 10.7942 16.5 9.16668C16.5 5.12326 13.2101 1.83334 9.16666 1.83334C5.12325 1.83334 1.83333 5.12326 1.83333 9.16668C1.83333 13.2101 5.12325 16.5 9.16666 16.5ZM9.16666 3.66668C12.1999 3.66668 14.6667 6.13343 14.6667 9.16668C14.6667 12.1999 12.1999 14.6667 9.16666 14.6667C6.13341 14.6667 3.66666 12.1999 3.66666 9.16668C3.66666 6.13343 6.13341 3.66668 9.16666 3.66668Z"
                fill="currentColor"
              />
              <path
                d="M10.461 7.87049C10.8084 8.21882 11 8.67899 11 9.16665H12.8333C12.8342 8.68488 12.7395 8.20772 12.5547 7.76277C12.37 7.31781 12.0989 6.91388 11.7572 6.57432C10.3693 5.18832 7.96309 5.18832 6.57617 6.57432L7.87051 7.87232C8.56717 7.17749 9.76801 7.17932 10.461 7.87049Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <ul className="mt-7">
            <li className="mt-4">
              <div className="shadow-1xl p-2 flex items-center justify-between rounded-lg relative">
                <p className="text-base">Novel</p>
                <div className="flex items-center py-3 px-5">
                  <svg
                    className="cursor-pointer"
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5H19"
                      stroke="#FF0000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5H17Z"
                      stroke="#FF0000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 10V16"
                      stroke="#FF0000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 10V16"
                      stroke="#FF0000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer ml-6"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.586 0.99988C13.9611 0.624937 14.4697 0.414307 15 0.414307C15.5303 0.414307 16.0389 0.624937 16.414 0.99988L18 2.58588C18.3749 2.96093 18.5856 3.46955 18.5856 3.99988C18.5856 4.53021 18.3749 5.03882 18 5.41388L10 13.4139C9.62501 13.789 9.11639 13.9998 8.586 13.9999H7C6.46957 13.9999 5.96086 13.7892 5.58579 13.4141C5.21071 13.039 5 12.5303 5 11.9999V10.4139C5.00011 9.88349 5.2109 9.37487 5.586 8.99988L13.586 0.99988ZM13.414 3.99988L15 5.58588L16.586 3.99988L17.293 4.70688L15 2.41388L13.414 3.99988ZM13.586 6.99988L12 5.41388L7 10.4139V11.9999H8.586L13.586 6.99988ZM0 4.99988C0 4.20423 0.316071 3.44117 0.87868 2.87856C1.44129 2.31595 2.20435 1.99988 3 1.99988H6C6.26522 1.99988 6.51957 2.10524 6.70711 2.29277C6.89464 2.48031 7 2.73466 7 2.99988C7 3.2651 6.89464 3.51945 6.70711 3.70699C6.51957 3.89452 6.26522 3.99988 6 3.99988H3C2.73478 3.99988 2.48043 4.10524 2.29289 4.29277C2.10536 4.48031 2 4.73466 2 4.99988V15.9999C2 16.2651 2.10536 16.5195 2.29289 16.707C2.48043 16.8945 2.73478 16.9999 3 16.9999H14C14.2652 16.9999 14.5196 16.8945 14.7071 16.707C14.8946 16.5195 15 16.2651 15 15.9999V12.9999C15 12.7347 15.1054 12.4803 15.2929 12.2928C15.4804 12.1052 15.7348 11.9999 16 11.9999C16.2652 11.9999 16.5196 12.1052 16.7071 12.2928C16.8946 12.4803 17 12.7347 17 12.9999V15.9999C17 16.7955 16.6839 17.5586 16.1213 18.1212C15.5587 18.6838 14.7956 18.9999 14 18.9999H3C2.20435 18.9999 1.44129 18.6838 0.87868 18.1212C0.316071 17.5586 0 16.7955 0 15.9999V4.99988Z"
                      fill="#00BC57"
                    />
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-3 xl:col-span-1 pr-4 pl-0 xl:pl-9 sm:pr-9 relative h-auto xl:h-screen overflow-scroll py-9">
          <div className="flex justify-between">
            <p className="text-base font-bold">
              Codeathome <span className="font-normal">BookStore</span>
            </p>
          </div>

          <div className="mt-8">
            <input
              type="text"
              placeholder="Category name"
              className="input-field"
            />
          </div>

          <div className="static mt-10 xl:mt-0 xl:absolute bottom-4 left-1/2 xl:transform xl:-translate-x-1/2 xl:w-11/12">
            <div>
              <button className="btn-violet flex items-center justify-center text-xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
