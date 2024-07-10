import { getData } from "@/api/fetchData";
import ProductData from "@/components/product/ProductData";
import React from "react";

const Product = async ({ limit, title, desc }) => {
  let data = await getData("/products");
  return (
    <div>
      <ProductData data={data} limit={limit} title={title} desc={desc} />
    </div>
  );
};

export default Product;
