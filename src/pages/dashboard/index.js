import React from "react";

export default function Dashboard() {
  return (
    <div className="pl-24 pr-9 sm:pl-32 py-9">
      <p className="text-xl">Dashboard</p>

      <div className="w-full">
        <div className="grid grid-cols-7 gap-4 mt-4">
          <div className="col-span-7 xl:col-span-4 h-72 shadow-1xl rounded-lg"></div>
          <div className="col-span-7 xl:col-span-3 h-72 shadow-1xl rounded-lg"></div>
        </div>
      </div>

      <p className="text-xl mt-10">Best Seller</p>
      <div className="grid grid-cols-2 gap-4 mt-9">
        <div className="col-span-2 xl:col-span-1 shadow-1xl p-4 flex items-start relative">
          <img src="./src//img/product/product1.png" alt="product1" />
          <div className="flex flex-col ml-6">
            <p className="font-bold text-xl text-violet-purple whitespace-nowrap w-24 sm:w-auto overflow-hidden overflow-ellipsis">
              David Bach: Faktor Latte
            </p>
            <p className="font-medium text-black">$2.70</p>
            <p className="absolute bottom-4 font-medium text-green-mantis">
              452 Unit sold
            </p>
            <p className="absolute top-4 right-4 text-white bg-orang bg-orange-pumkin px-3 py-1 rounded-lg">
              Top 1
            </p>
          </div>
        </div>
        <div className="col-span-2 xl:col-span-1 shadow-1xl p-4 flex items-start relative">
          <img src="./src//img/product/product2.png" alt="product2" />
          <div className="flex flex-col ml-6">
            <p className="font-bold text-xl text-violet-purple whitespace-nowrap w-24 sm:w-auto overflow-hidden overflow-ellipsis">
              Salvation of a Saint
            </p>
            <p className="font-medium text-black">$6.70</p>
            <p className="absolute bottom-4 font-medium text-green-mantis">
              245 Unit sold
            </p>
            <p className="absolute top-4 right-4 text-white bg-orang bg-orange-pumkin px-3 py-1 rounded-lg">
              Top 2
            </p>
          </div>
        </div>
        <div className="col-span-2 xl:col-span-1 shadow-1xl p-4 flex items-start relative">
          <img src="./src//img/product/product3.png" alt="product3" />
          <div className="flex flex-col ml-6">
            <p className="font-bold text-xl text-violet-purple whitespace-nowrap w-24 sm:w-auto overflow-hidden overflow-ellipsis">
              David Bach: Faktor Latte
            </p>
            <p className="font-medium text-black">$9.70</p>
            <p className="absolute bottom-4 font-medium text-green-mantis">
              387 Unit sold
            </p>
            <p className="absolute top-4 right-4 text-white bg-orang bg-orange-pumkin px-3 py-1 rounded-lg">
              Top 3
            </p>
          </div>
        </div>
        <div className="col-span-2 xl:col-span-1 shadow-1xl p-4 flex items-start relative">
          <img src="./src//img/product/product4.png" alt="product4" />
          <div className="flex flex-col ml-6">
            <p className="font-bold text-xl text-violet-purple whitespace-nowrap w-24 sm:w-auto overflow-hidden overflow-ellipsis">
              David Bach: Faktor Latte
            </p>
            <p className="font-medium text-black">$5.70</p>
            <p className="absolute bottom-4 font-medium text-green-mantis">
              138 Unit sold
            </p>
            <p className="absolute top-4 right-4 text-white bg-orang bg-orange-pumkin px-3 py-1 rounded-lg">
              Top 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
