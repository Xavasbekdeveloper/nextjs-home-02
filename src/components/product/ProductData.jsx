import React from "react";
import Image from "next/image";
import "./product.scss";
import Link from "next/link";

const ProductData = ({ data, limit, title, desc }) => {
  return (
    <div className="product">
      <div className="container">
        <h3 className="product__sec__title">{title}</h3>
        <p className="product__desc">{desc}</p>
        <div className="product__cards">
          {data?.products?.slice(0, limit).map((product) => (
            <div className="product__card" key={product.id}>
              <div className="product__img">
                <Link href={`/product/${product.id}`}>
                  <Image
                    width={100}
                    height={100}
                    alt={product.title}
                    src={product.images[0]}
                  />
                </Link>
              </div>
              <div className="product__info">
                <h3 className="product__title">{product.title}</h3>
                <h4 className="product__price">{product.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductData;
