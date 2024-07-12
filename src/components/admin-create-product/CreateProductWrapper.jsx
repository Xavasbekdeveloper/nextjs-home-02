"use client";
import React, { useState } from "react";
import "./createProductWrapper.scss";
import { useGetCategoryQuery } from "@/lib/api/categoryApi";
import { useCreateProductMutation } from "@/lib/api/productsApi";
import { useRouter } from "next/navigation";

const initialState = {
  title: "",
  price: "",
  desc: "",
  category: "",
  images: [
    "https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-s24-ultra/carousel/titanium-violet-1.png",
  ],
};

const CreateProductWrapper = () => {
  const [newProduct, setNewProduct] = useState(initialState);
  const { data: categoryData } = useGetCategoryQuery();
  const [createProduct, { data: productData }] = useCreateProductMutation();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const router = useRouter();

  const handleCreate = (e) => {
    e.preventDefault();
    createProduct(newProduct);
    router.push("/admin/manage-product");
    setNewProduct(initialState);
  };

  return (
    <div>
      <form onSubmit={handleCreate} className="create-form" action="">
        <input
          value={newProduct.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Enter product name"
        />
        <input
          value={newProduct.price}
          onChange={handleChange}
          name="price"
          type="number"
          placeholder="Enter product price"
        />
        <textarea
          value={newProduct.desc}
          onChange={handleChange}
          placeholder="Enter product description"
          name="desc"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <select
          value={newProduct.category}
          onChange={handleChange}
          name="category"
          id=""
        >
          <option selected disabled value="">
            Choose Category
          </option>
          {categoryData?.map((item) => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
        <input disabled type="text" placeholder="Enter image url" />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProductWrapper;
