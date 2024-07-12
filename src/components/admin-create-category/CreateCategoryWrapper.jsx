"use client";
import React, { useState } from "react";

import "../admin-create-product/createProductWrapper.scss";
import { useCreateCategoryMutation } from "@/lib/api/categoryApi";

const initialState = {
  title: "",
};

const CreateCategoryWrapper = () => {
  const [newCategory, setNewCategory] = useState(initialState);
  const [createCategory] = useCreateCategoryMutation();

  const handleChange = (e) => {
    let { value, name } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createCategory(newCategory);
    setNewCategory(initialState);
  };

  return (
    <div className="create-category">
      <form className="create-form" onSubmit={handleCreate} action="">
        <input
          value={newCategory.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Enter category name"
        />
        <button>create</button>
      </form>
    </div>
  );
};

export default CreateCategoryWrapper;
