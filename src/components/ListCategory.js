import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../features/category/actions";
import { sortirByCategory } from "../features/product/actions";
export default function ListCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  // console.log("categories", categories);
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <ul className="flex max-w-full overflow-scroll pb-4">
      <li
        className={`${
          categories.status === "idle" || categories.status === "process"
            ? "mr-6"
            : ""
        }`}
        onClick={() => dispatch(sortirByCategory(null))}
      >
        <a className="items-list">All Category</a>
      </li>
      {categories.status === "idle"
        ? "idle"
        : categories.status === "process"
        ? "proses"
        : categories.status === "success"
        ? categories.data.map((category, index) => {
            return (
              <li
                key={index}
                onClick={() => dispatch(sortirByCategory(category.id))}
                className={`ml-6`}
              >
                <a className="items-list">{category.name}</a>
              </li>
            );
          })
        : "error fetching"}
    </ul>
  );
}
