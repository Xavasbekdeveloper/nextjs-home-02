"use client";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "@/lib/api/categoryApi";
import "./manageCategoryWrapper.scss";

const ManageCategoryWrapper = () => {
  const { data } = useGetCategoryQuery();
  const [categoryDelete] = useDeleteCategoryMutation();

  const handleDelete = (id) => {
    if (window.confirm("are you sure delete ?")) {
      categoryDelete(id);
    }
  };

  return (
    <div className="manage-category">
      {data?.map((item) => (
        <div key={item.id} className="manage-category-card">
          <h3>{item.title}</h3>
          <div className="manage-category__btns">
            <button onClick={() => handleDelete(item.id)}>
              <RiDeleteBin6Line />
            </button>
            <button>
              <CiEdit />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageCategoryWrapper;
