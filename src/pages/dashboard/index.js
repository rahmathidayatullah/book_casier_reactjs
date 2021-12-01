import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { config } from "../../config";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import { fetchDashboard } from "../../features/dashboard/actions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const dashboards = useSelector((state) => state.dashboard);
  console.log("dashboards", dashboards);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  useEffect(() => {
    dispatch(fetchDashboard());
  }, []);
  return (
    <div className="pl-24 pr-9 sm:pl-32 py-9">
      <p className="text-xl">Dashboard</p>

      <div className="w-full">
        <div className="grid grid-cols-7 gap-4 mt-4">
          <div className="col-span-7 xl:col-span-4 h-72 shadow-1xl rounded-lg flex items-center justify-center">
            <BarChart width={730} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="col-span-7 xl:col-span-3 h-72 shadow-1xl rounded-lg flex items-center justify-center">
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </div>
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
