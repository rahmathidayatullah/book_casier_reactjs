import React from "react";
import IconDelete from "../../assets/icon/delete";
import EmptyImage from "../../assets/img/empty_order.png";
import { config } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import {
  addQty,
  checkoutData,
  deleteCart,
  minQty,
} from "../../features/cart/actions";
export default function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  console.log("carts", carts);
  return (
    <div className="col-span-3 xl:col-span-1 pr-4 pl-0 xl:pl-9 sm:pr-9 relative h-auto xl:h-screen overflow-scroll py-9">
      <div className="flex justify-between">
        <p className="text-base font-bold">
          Codeathome <span className="font-normal">BookStore</span>
        </p>
      </div>
      <ul className="mt-7 h-auto xl:h-72-vh xl:overflow-scroll">
        {!carts.data.length ? (
          <div className="flex items-center justify-center h-full">
            <img src={EmptyImage} alt="empty order" className="mb-20" />
          </div>
        ) : carts.status === "process" ? (
          "loading"
        ) : (
          carts.data.map((items, index) => {
            return (
              <li key={index} className="mt-4">
                <div className="shadow-1xl p-2 flex items-start rounded-lg relative">
                  <div
                    className="h-full rounded-lg overflow-hidden"
                    style={{ width: "110px", minWidth: "100px" }}
                  >
                    <img
                      style={{
                        height: "110px",
                        width: "110px",
                        minWidth: "100px",
                      }}
                      src={config.api_image + items.cover}
                      alt="product2"
                    />
                  </div>
                  <div className="pl-4 border-l ml-4">
                    <p className="text-black font-bold text-base whitespace-nowrap w-48 overflow-hidden overflow-ellipsis">
                      {items.auhtor}
                    </p>
                    <p className="text-base font-semibold my-1">
                      ${items.price}
                    </p>
                    <p className="text-gray-culture font-medium text-sm">
                      Stock : {items.stock}
                    </p>
                    <div className="flex items-center mt-4">
                      <button
                        onClick={() => dispatch(minQty(index, items.id))}
                        className="btn_circle"
                        style={{ height: "17px", width: "17px" }}
                      >
                        -
                      </button>
                      <span className="mx-4">{items.jumlah}</span>
                      <button
                        onClick={() => dispatch(addQty(index, items.id))}
                        className="btn_circle"
                        style={{ height: "17px", width: "17px" }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <IconDelete onClick={() => dispatch(deleteCart(items.id))} />
                </div>
              </li>
            );
          })
        )}
      </ul>
      <div className="static mt-10 xl:mt-0 xl:absolute bottom-4 left-1/2 xl:transform xl:-translate-x-1/2 xl:w-11/12">
        <div className="flex items-center justify-between rounded-lg bg-gray-culture p-4 bg-opacity-20">
          <p>Total Payment </p>
          <p> $ {carts?.data?.reduce((n, { price }) => n + price, 0)}</p>
        </div>
        <div>
          <button
            className="btn-violet flex items-center justify-center text-xl"
            type="button"
            onClick={() => dispatch(checkoutData(carts))}
          >
            Checkout&nbsp;
            <span className="font-light">({carts.data.length} Book)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
