import React from "react";
import DetailProduct from "@/components/detail-product/DetailProduct";
import { getData } from "@/api/fetchData";

const Detail = async ({ params }) => {
  const { id } = params;
  let data = await getData(`/products/${id}`);

  return <DetailProduct data={data} />;
};

export default Detail;
