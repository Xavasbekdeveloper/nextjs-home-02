"use client";
import React from "react";
import Image from "next/image";
import "./product.scss";
import Link from "next/link";
import { useGetProductsQuery } from "@/lib/api/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { addWishlist } from "@/lib/features/wishlist/wishlistSlice";
import { IoCartOutline, IoCart } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductData = ({ limit, title, desc }) => {
  const { data, isLoading } = useGetProductsQuery({ limit });
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.value);
  const wishlistData = useSelector((state) => state.wishlist.data);

  return (
    <div className="product">
      <div className="container">
        <h3 className="product__sec__title">{title}</h3>
        <p className="product__desc">{desc}</p>
        <div className="product__cards">
          {data?.products?.map((product) => (
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
                <div className="product__img__btns">
                  <button
                    disabled={cartData?.some((el) => el.id === product.id)}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    {cartData?.some((el) => el.id === product.id) ? (
                      <IoCart color="#fff" />
                    ) : (
                      <IoCartOutline color="#fff" />
                    )}
                  </button>
                  <button
                    onClick={() => dispatch(addWishlist(product))}
                    className="product__card__heart-btn"
                  >
                    {wishlistData.some((el) => el.id === product.id) ? (
                      <FaHeart color="#fff" />
                    ) : (
                      <FaRegHeart color="#fff" />
                    )}
                  </button>
                </div>
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
