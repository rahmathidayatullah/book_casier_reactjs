import React, { useEffect, useState } from "react";
import {
  deleteCategoryApi,
  fetchCategory,
  getOneCategory,
  postCategory,
  postUpdateCategory,
} from "../../features/category/actions";
import { useDispatch, useSelector } from "react-redux";
import IconSearch from "../../assets/icon/search";
import IconDelete from "../../assets/icon/delete2";
import IconEdit from "../../assets/icon/edit";

import { useForm } from "react-hook-form";

export default function Category() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm();

  const category = useSelector((state) => state.category);
  // console.log("category", category);

  const [form, setForm] = useState({
    name: "",
  });

  const [updateEvent, setUpdateEvent] = useState(false);
  const [idCategory, setIdCategory] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteCategoryApi(id));
  };

  const handleUpdate = (id) => {
    setIdCategory(id);
    dispatch(getOneCategory(id));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    dispatch(postCategory(form));
    setForm({
      name: "",
    });
  };

  const handleUpdatePost = () => {
    const isEmpty = Object.values(form).every((x) => x !== "");
    if (!isEmpty) {
      alert("harus isi semua field");
    } else {
      dispatch(postUpdateCategory(idCategory, form));
      setForm({
        name: "",
      });
      setUpdateEvent(false);
    }
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, [
    dispatch,
    category.loadingDelete,
    category.loadingUpdate,
    category.loadingPost,
  ]);

  useEffect(() => {
    if (category.dataGetOne) {
      setUpdateEvent(true);
      setForm({ ...form, name: category.dataGetOne.data.name });
    }
  }, [dispatch, category.dataGetOne]);

  return (
    <div className="pl-24 sm:pl-32">
      <div className="grid grid-cols-3">
        <div className="col-span-3 xl:col-span-2 pr-4 sm:pr-9 py-9 border-r overflow-scroll h-auto xl:h-screen relative pl-2">
          <p className="text-xl">Category Managment</p>

          <div className="relative mt-8 group text-gray-culture focus-within:text-violet-purple duration-300">
            <input
              type="text"
              placeholder="Search book..."
              className="input-field"
            />
            <IconSearch />
          </div>

          <ul className="mt-7">
            {category.status === "idle"
              ? "idle"
              : category.status === "process"
              ? "process"
              : category.status === "success"
              ? category.data.map((items, index) => {
                  return (
                    <li key={index} className="mt-4">
                      <div className="shadow-1xl p-2 flex items-center justify-between rounded-lg relative">
                        <p className="text-base">{items.name}</p>
                        <div className="flex items-center py-3 px-5">
                          <IconDelete onClick={() => handleDelete(items.id)} />
                          <IconEdit
                            onClick={() => handleUpdate(items.id)}
                            className="ml-6 mt-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    </li>
                  );
                })
              : "error"}
          </ul>
        </div>
        <div className="col-span-3 xl:col-span-1 pr-4 pl-0 xl:pl-9 sm:pr-9 relative h-auto xl:h-screen overflow-scroll py-9">
          <div className="flex justify-between">
            <p className="text-base font-bold">
              Codeathome <span className="font-normal">BookStore</span>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-8">
              <input
                {...register("name", {
                  required: "error message name",
                })}
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Category name"
                className="input-field"
              />
              {errors.name && (
                <p className="text-red-500 mt-2">{errors.name.message}</p>
              )}
            </div>

            <div className="static mt-10 xl:mt-0 xl:absolute bottom-4 left-1/2 xl:transform xl:-translate-x-1/2 xl:w-11/12">
              <div>
                {updateEvent ? (
                  <button
                    onClick={handleUpdatePost}
                    type="button"
                    className="btn-violet flex items-center justify-center text-xl"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-violet flex items-center justify-center text-xl"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
