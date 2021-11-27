import React, { useEffect, useState } from "react";
import { fetchProduct, searchByKeyword } from "../../features/product/actions";
import { postCart } from "../../features/cart/actions";
import { useDispatch, useSelector } from "react-redux";
import IconSearch from "../../assets/icon/search";
import Cart from "./cart";
import { config } from "../../config";
import moment from "moment";
import ListCategory from "../../components/ListCategory";
export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const carts = useSelector((state) => state.cart.data);

  const addToCart = (product, id) => {
    let dataProduct = { ...product, jumlah: 1 };
    let dataCart = [...carts];
    if (!dataCart.length) {
      dataCart.push(dataProduct);
    } else {
      dataCart.forEach((items) => {
        if (items.id === product.id) {
          items.jumlah = items.jumlah + 1;
        } else if (!dataCart.find((item) => item.id === id)) {
          dataCart.push(dataProduct);
        }
      });
    }
    dispatch(postCart(dataCart));
    // simpan data cart ke locastorage
    localStorage.setItem("dataCart", JSON.stringify(dataCart));
  };
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch, products.keyword, products.category]);
  return (
    <div className="pl-24 sm:pl-32">
      <div className="grid grid-cols-3">
        <div className="col-span-3 xl:col-span-2 pr-4 sm:pr-9 py-9 border-r overflow-scroll h-auto xl:h-screen">
          {/* list category */}
          <ListCategory />
          <div className="relative mt-8 group text-gray-culture focus-within:text-violet-purple duration-300">
            <input
              type="text"
              placeholder="Search book..."
              className="input-field"
              onChange={(e) => dispatch(searchByKeyword(e.target.value))}
            />
            <IconSearch />
          </div>
          {/* list product */}
          <div className="grid grid-cols-6 gap-8 mt-5 p-2">
            {products.status === "idle"
              ? "idel"
              : products.status === "process"
              ? "proocess"
              : products.status === "success"
              ? !products.data.length
                ? "Tidak ada data"
                : products.data.map((product, index) => {
                    return (
                      <div
                        className="card col-span-6 md:col-span-3 lg:col-span-2"
                        key={index}
                        onClick={() => addToCart(product, product.id)}
                      >
                        <img
                          className="w-1/2 mx-auto"
                          src={config.api_image + product.cover}
                          alt="product1"
                        />
                        <hr className="bg-gray-culture my-6" />
                        <p className="text-gray-culture font-medium text-sm">
                          Stock : {product.stock}
                        </p>
                        <p className="text-black font-bold text-base whitespace-nowrap w-20 2xl:w-48 overflow-hidden overflow-ellipsis">
                          {product.title}
                        </p>
                        <p className="text-green-mantis text-xs my-3">
                          Published at
                          <span className="text-white bg-green-mantis rounded-lg p-2 ml-3">
                            {moment(product.published).format("DD/MM/YYYY")}
                          </span>{" "}
                        </p>
                        <div className="mt-6 flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-culture whitespace-nowrap w-36 overflow-hidden overflow-ellipsis">
                            Author : {product.auhtor}
                          </p>
                          <p className="text-base font-semibold">$2.70</p>
                        </div>
                        <div className="hover-content"></div>
                        <p className="text-hover">Add to cart</p>
                      </div>
                    );
                  })
              : products.error}
          </div>
        </div>
        {/* cart here */}
        <Cart />
      </div>
    </div>
  );
}
