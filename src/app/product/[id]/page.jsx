import React from "react";
import DetailProduct from "@/components/detail-product/DetailProduct";

const Detail = ({ params }) => {
  const { id } = params;

  return <DetailProduct productId={id} />;
};

export default Detail;
