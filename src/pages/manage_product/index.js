import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, searchByKeyword } from "../../features/product/actions";
import IconDelete from "../../assets/icon/delete2";
import IconEdit from "../../assets/icon/edit";
import IconSearch from "../../assets/icon/search";
import { config } from "../../config";
import moment from "moment";
import Form from "./form";
export default function ManageProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  console.log("products", products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch, products.keyword, products.category]);
  return (
    <div className="pl-24 sm:pl-32">
      <div className="grid grid-cols-3">
        <div className="col-span-3 xl:col-span-2 pr-4 sm:pr-9 py-9 border-r overflow-scroll h-auto xl:h-screen relative">
          <p className="text-xl">Book Managment</p>

          <div className="relative mt-8 group text-gray-culture focus-within:text-violet-purple duration-300">
            <input
              type="text"
              placeholder="Search book..."
              className="input-field"
              onChange={(e) => dispatch(searchByKeyword(e.target.value))}
            />
            <IconSearch />
          </div>

          <ul className="mt-7">
            {products.status === "idle"
              ? "idel"
              : products.status === "process"
              ? "proocess"
              : products.status === "success"
              ? !products.data.length
                ? "Tidak ada data"
                : products.data.map((product, index) => {
                    return (
                      <li className="mt-4" key={index}>
                        <div className="shadow-1xl p-2 flex items-start rounded-lg relative">
                          <div
                            className="h-full rounded-lg overflow-hidden"
                            style={{ maxWidth: "120px" }}
                          >
                            <img
                              className="w-full h-full"
                              src={config.api_image + product.cover}
                              alt="product1"
                            />
                          </div>
                          <div className="pl-4 border-l ml-4">
                            <p className="text-black font-bold text-base whitespace-nowrap w-48 overflow-hidden overflow-ellipsis">
                              {product.title}
                            </p>

                            <p className="text-green-mantis text-xs my-3">
                              Published at{" "}
                              <span className="text-white bg-green-mantis rounded-lg p-2 ml-3">
                                {moment(product.published).format("DD/MM/YYYY")}
                              </span>{" "}
                            </p>

                            <p className="font-medium mt-6 text-gray-culture text-sm">
                              Author : {product.auhtor}
                            </p>
                            <p className="font-semibold text-black text-base">
                              $99.70
                            </p>
                          </div>
                          <div className="absolute top-4 right-8">
                            <IconDelete />

                            <IconEdit />
                          </div>
                        </div>
                      </li>
                    );
                  })
              : products.error}
          </ul>
        </div>
        {/* here form */}
        <Form />
      </div>
    </div>
  );
}
