import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconEmpty from "../../assets/img/empty_transaction.png";
import moment from "moment";
export default function DetailTransaction() {
  const transactions = useSelector((state) => state.transaction);
  console.log("detail com", transactions);

  return (
    <div className="col-span-3 xl:col-span-1 pr-4 pl-0 xl:pl-9 sm:pr-9 relative h-auto xl:h-screen overflow-scroll py-9">
      <div className="flex justify-between">
        <p className="text-base font-bold">
          Codeathome <span className="font-normal">BookStore</span>
        </p>
      </div>

      <p className="text-base mt-12">Detail transaction</p>

      {!transactions.dataGetOne ? (
        /* <!-- empty oerder --> */
        <div class="flex items-center justify-center h-full">
          <img src={IconEmpty} alt="empty_order" class="mb-20" />
        </div>
      ) : transactions.loadingGetOne ? (
        "loading"
      ) : transactions.loadingGetOne === false ? (
        transactions.dataGetOne.data.map((items, index) => {
          return (
            <div key={index} className="py-6 px-5 shadow-1xl mt-4">
              <div className="flex justify-between pb-4 border-b">
                <p className="text-base">ID : {items.invoice}</p>
                <p className="text-base">
                  {moment(items.date).format("DD MMMM YYYY LT")}
                </p>
              </div>

              <p className="text-violet-purple font-bold text-base mt-6">
                ${transactions.totalSumPrice} Payment
              </p>

              <ul className="mt-16">
                {items.detailTransaction.map((itm, idx) => {
                  return (
                    <li key={idx} className={`${idx === 0 ? "" : "mt-4"}`}>
                      <div className="flex items-end justify-between pb-4 border-b">
                        <div>
                          <p className="text-base font-bold text-black">
                            {itm.titleProduct}
                          </p>
                          <p className="text-base text-gray-culture">
                            ${itm.priceProduct} x {itm.quantity}
                          </p>
                        </div>
                        <p className="text-base text-gray-culture">
                          ${itm.priceProduct * itm.quantity}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-between mt-10">
                <p className="text-base font-bold text-red-dragon">Total</p>
                <p className="text-base font-bold text-red-dragon">
                  ${transactions.totalSumPrice}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        "error"
      )}
    </div>
  );
}
