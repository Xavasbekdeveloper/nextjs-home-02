"use client";
import React from "react";
import "./manageProductWrapper.scss";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "@/lib/api/productsApi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

const ManageProductWrapper = () => {
  const { data, isLoading } = useGetProductsQuery();
  const [productDelete] = useDeleteProductMutation();

  const handleDelete = (id) => {
    if (window.confirm("are you sure delete ?")) {
      productDelete(id);
    }
  };

  return (
    <div className="manage">
      {data?.map((product) => (
        <div className="manage__card">
          <div className="manage__img">
            <Link href={`/product/${product.id}`}>
              <Image
                width={100}
                height={100}
                alt={product.title}
                src={product?.images[0]}
              />
            </Link>
          </div>
          <div className="manage__info">
            <Link href={`/product/${product.id}`}>
              <h3 className="manage__title">{product.title}</h3>
            </Link>
            <h4 className="manage__price">{product.price}</h4>
            <div className="manage__btns">
              <button onClick={() => handleDelete(product.id)}>
                <RiDeleteBin6Line />
              </button>
              <button>
                <CiEdit />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageProductWrapper;
