"use client";
import React, { useState } from "react";
import "./product.scss";
import { useGetProductsQuery } from "@/lib/api/productsApi";
import Product from "./Product";
import { useGetCategoryQuery } from "@/lib/api/categoryApi";

const ProductData = ({ limit, title, desc }) => {
  const [categoryValue, setCategoryValue] = useState("");
  const { data, isLoading } = useGetProductsQuery({
    limit,
    page: 1,
    category: categoryValue,
  });
  const { data: categoryData, isLoading: categoryLoading } =
    useGetCategoryQuery();

  return (
    <div className="product">
      <div className="container">
        <h3 className="product__sec__title">{title}</h3>
        <p className="product__desc">{desc}</p>
        <ul className="product__category">
          <li>
            <data onClick={() => setCategoryValue("")} value={""}>
              All
            </data>
          </li>
          {categoryData?.map((el) => (
            <li key={el.id}>
              <data onClick={() => setCategoryValue(el.title)} value={el.title}>
                {el.title}
              </data>
            </li>
          ))}
        </ul>
        <div className="product__cards">
          {data?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
