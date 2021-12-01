import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransaction,
  getOneTransaction,
} from "../../features/transactions/actions";
import IconSearch from "../../assets/icon/search";
import DetailTransaction from "./detail_transaction";
import IconDetail from "../../assets/icon/detail";
import moment from "moment";

export default function Transaction() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction);

  console.log("transactions", transactions);

  const handleGetDetail = (id) => {
    // get detail
    dispatch(getOneTransaction(id));
  };

  useEffect(() => {
    dispatch(fetchTransaction());
  }, []);
  return (
    <div className="pl-24 sm:pl-32">
      <div className="grid grid-cols-3">
        <div className="col-span-3 xl:col-span-2 pr-4 sm:pr-9 py-9 border-r overflow-scroll h-auto xl:h-screen relative">
          <p className="text-xl">Transaction</p>

          <div className="relative mt-8 group text-gray-culture focus-within:text-violet-purple duration-300">
            <input
              type="text"
              placeholder="Search ..."
              className="input-field"
            />
            <IconSearch />
          </div>

          <ul className="mt-7">
            {transactions.status === "idle"
              ? "default"
              : transactions.status === "process"
              ? "process"
              : transactions.status === "success"
              ? transactions.data.data.map((items, index) => {
                  return (
                    <li key={index} className="mt-4">
                      <div className="px-5 rounded-lg shadow-1xl flex flex-wrap items-center justify-between">
                        <span className="text-base my-2">id : {items.id}</span>
                        <div className="hidden lg:block h-7 w-0 border bg-gray-culture"></div>
                        <div className="text-base my-2 font-semibold overflow-ellipsis overflow-hidden w-56">
                          {items.detailTransaction.map((item, idx) => {
                            return <span key={idx}>{item.auhtorProduct},</span>;
                          })}
                        </div>
                        <div className="hidden lg:block h-7 w-0 border bg-gray-culture"></div>
                        <span className="text-base my-2">
                          {/* 16 November 2021, 00:18 AM */}
                          {moment(items.date).format("DD MMMM YYYY LT")}
                        </span>
                        <IconDetail onClick={() => handleGetDetail(items.id)} />
                      </div>
                    </li>
                  );
                })
              : "error"}
          </ul>
        </div>
        <DetailTransaction />
      </div>
    </div>
  );
}
