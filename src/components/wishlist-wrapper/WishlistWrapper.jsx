"use client";
import React from "react";
import "./wishlistWrapper.scss";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { IoCartOutline, IoCart } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Empty from "../empty/Empty";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { addWishlist } from "@/lib/features/wishlist/wishlistSlice";

const WishlistWrapper = () => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.data);
  const cartData = useSelector((state) => state.cart.value);

  return (
    <div>
      {wishlistData.length !== 0 ? (
        <div className="wishlist">
          <h1 className="wishlist__title">Wishlist</h1>
          <div className="wishlist__cards container">
            {wishlistData?.map((product) => (
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
      ) : (
        <Empty
          img={
            "https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
          }
        />
      )}
    </div>
  );
};

export default WishlistWrapper;
