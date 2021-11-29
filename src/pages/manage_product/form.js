import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Book_default from "../../assets/icon/book_default";
import { changeImageApi } from "../../features/manage_product/actions";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../features/manage_product/actions";
export default function Form() {
  const dispatch = useDispatch();
  const manageProducts = useSelector((state) => state.manage);
  // console.log("manageProducts", manageProducts);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm();

  // console.log("watch", watch());
  // console.log("errors", errors);

  const [form, setForm] = useState({
    // for image
    cover: "",
    file: "",
    // end image

    title: "",
    author: "",
    published: "",
    price: "",
    stock: "",
    category: "",
  });

  // console.log("form", form);

  const [errorImage, setErrorImage] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "cover") {
      let reader = new FileReader();
      let file = e.target.files[0];
      const fileSize = file.size / 1024 / 1024; // in MiB
      if (fileSize > 2) {
        alert("File size exceeds 2 MiB");
      } else {
        reader.onloadend = () => {
          setForm({ ...form, file: file, cover: reader.result });
        };
        reader.readAsDataURL(file);
        setErrorImage(true);
        dispatch(changeImageApi(file));
      }
    } else {
      const value = e.target.value;
      clearErrors(name);
      setForm({ ...form, [name]: value });
    }
  };

  const onSubmit = () => {
    dispatch(postProduct(form));
  };

  return (
    <div className="col-span-3 xl:col-span-1 pr-4 pl-0 xl:pl-9 sm:pr-9 relative h-auto xl:h-screen overflow-scroll py-9">
      <div className="flex justify-between">
        <p className="text-base font-bold">
          Codeathome <span className="font-normal">BookStore</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-lg shadow-1xl flex flex-col items-center justify-center py-24 mt-8">
          <Book_default />
          <div className="relative">
            <input
              onChange={handleChange}
              name="cover"
              className="opacity-0 absolute inset-0 cursor-pointer"
              type="file"
              accept="image/*"
            />
            <p className="text-center text-gray-culture mt-2">
              Click to select image
              <br />
              100 x 80 pixels
            </p>
          </div>
        </div>
        {!errorImage && (
          <p className="text-red-500 mt-2">Image tidak boleh kosong</p>
        )}

        <div>
          <img src={form.cover && form.cover} />
        </div>

        <div className="mt-3">
          <input
            {...register("title", {
              required: "error message title",
            })}
            value={form.title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Book title"
            className="input-field"
          />
          {errors.title && (
            <p className="text-red-500 mt-2">{errors.title.message}</p>
          )}
        </div>
        <div className="mt-3">
          <input
            {...register("author", {
              required: "author can't be empty",
            })}
            value={form.auhtor}
            name="author"
            type="text"
            onChange={handleChange}
            placeholder="Book author/publisher"
            className="input-field"
          />
          {errors.author && (
            <p className="text-red-500 mt-2">{errors.author.message}</p>
          )}
        </div>
        <div className="mt-3">
          <select
            {...register("category", {
              required: "category can't be empty",
            })}
            value={form.category}
            name="category"
            type="text"
            onChange={handleChange}
            className="input-field cursor-pointer text-gray-culture"
            id="category"
          >
            <option value="">Select category</option>
            <option value="1">category 1</option>
            <option value="2">category 2</option>
          </select>
          {errors.category && (
            <p className="text-red-500 mt-2">{errors.category.message}</p>
          )}
        </div>
        <div className="mt-3">
          <input
            {...register("published", {
              required: "published can't be empty",
            })}
            value={form.published}
            name="published"
            type="date"
            onChange={handleChange}
            placeholder="Date published"
            className="input-field cursor-pointer text-gray-culture"
          />
          {errors.published && (
            <p className="text-red-500 mt-2">{errors.published.message}</p>
          )}
        </div>
        <div className="mt-3">
          <input
            {...register("price", {
              required: "price can't be empty",
            })}
            value={form.price}
            name="price"
            type="number"
            onChange={handleChange}
            placeholder="Price"
            className="input-field"
          />
          {errors.price && (
            <p className="text-red-500 mt-2">{errors.price.message}</p>
          )}
        </div>
        <div className="mt-3">
          <input
            {...register("stock", {
              required: "stock can't be empty",
            })}
            value={form.stock}
            onChange={handleChange}
            name="stock"
            type="number"
            placeholder="Available stock"
            className="input-field"
          />
          {errors.stock && (
            <p className="text-red-500 mt-2">{errors.stock.message}</p>
          )}
        </div>

        <button type="submit" className="btn-violet">
          Submit
        </button>
      </form>
    </div>
  );
}
