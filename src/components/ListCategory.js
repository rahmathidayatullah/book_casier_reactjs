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
                className={`${index === 0 ? "" : "ml-6"}`}
              >
                <a className="items-list">{category.name}</a>
              </li>
            );
          })
        : "error fetching"}
    </ul>
  );
}
