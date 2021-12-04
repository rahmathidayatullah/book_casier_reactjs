import React, { useEffect, useState, useCallback } from "react";
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
  Sector,
  ResponsiveContainer,
} from "recharts";
import { fetchDashboard } from "../../features/dashboard/actions";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    priceProduct,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.titleProduct}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${priceProduct}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const dispatch = useDispatch();
  const dashboards = useSelector((state) => state.dashboard);
  console.log("dashboards", dashboards);
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group DD asdasd", value: 200 },
    { name: "Group DD asdasd", value: 200 },
    { name: "Group DD asdasd", value: 200 },
    { name: "Group DD asdasd", value: 200 },
    { name: "Group DD asdasd", value: 200 },
    { name: "Group DD asdasd", value: 200 },
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
            <BarChart
              width={730}
              height={250}
              data={dashboards?.data?.data?.chart}
              barGap={2}
              barSize={50}
            >
              <CartesianGrid strokeDasharray="3 3" stroke />
              <XAxis
                fontSize={11}
                dataKey="x"
                padding={{ left: 10, right: 10 }}
                fontSize={10}
              />
              <YAxis fontSize={11} padding={10} />
              <Tooltip />
              {/* <Legend stroke={0} /> */}
              <Bar
                fontSize={11}
                wordSpacing={100}
                dataKey="y"
                widths={10}
                width={10}
                fill="#8884d8"
              />
            </BarChart>
          </div>
          <div className="col-span-7 xl:col-span-3 h-72 shadow-1xl rounded-lg flex items-center justify-center">
            <PieChart width={400} height={400}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={dashboards?.data?.data?.bestMonth}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="priceProduct"
                onMouseEnter={onPieEnter}
              />
            </PieChart>
          </div>
        </div>
      </div>

      <p className="text-xl mt-10">Best Seller</p>
      <div className="grid grid-cols-2 gap-4 mt-9">
        {dashboards.status === "idle"
          ? "idles"
          : dashboards.status === "process"
          ? "process"
          : dashboards.status === "success"
          ? dashboards.data.data.bestProduct.map((items, index) => {
              return (
                <div
                  key={index}
                  className="col-span-2 xl:col-span-1 shadow-1xl p-4 flex items-start relative"
                >
                  <img
                    src={config.api_image + items.coverImage}
                    alt="product1"
                  />
                  <div className="flex flex-col ml-6">
                    <p className="font-bold text-xl text-violet-purple whitespace-nowrap w-24 sm:w-52 overflow-hidden overflow-ellipsis">
                      {items.titleProduct}
                    </p>
                    <p className="font-medium text-black">
                      ${items.priceProduct}
                    </p>
                    <p className="absolute bottom-4 font-medium text-green-mantis">
                      {items.total_quantity} Unit sold
                    </p>
                    <p className="absolute top-4 right-4 text-white bg-orang bg-orange-pumkin px-3 py-1 rounded-lg">
                      Top {index + 1}
                    </p>
                  </div>
                </div>
              );
            })
          : "error"}
      </div>
    </div>
  );
}
