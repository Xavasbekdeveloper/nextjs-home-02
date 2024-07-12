import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline, IoCart } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  addToCart,
  decreaseAmount,
  increaseAmount,
  removeCart,
} from "@/lib/features/cart/cartSlice";
import { addWishlist } from "@/lib/features/wishlist/wishlistSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.value);
  const wishlistData = useSelector((state) => state.wishlist.data);
  const existProduct = cartData?.find((el) => el.id === product?.id);

  return (
    <div className="product__card">
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
        <Link href={`/product/${product.id}`}>
          <h3 className="product__title">{product.title}</h3>
        </Link>
        <h4 className="product__price">{product.price}</h4>
        {existProduct ? (
          existProduct.amount < 1 ? (
            <button onClick={() => dispatch(increaseAmount(product))}>1</button>
          ) : (
            <div>
              <button
                onClick={() =>
                  dispatch(
                    existProduct.amount <= 1
                      ? removeCart(product)
                      : decreaseAmount(product)
                  )
                }
              >
                -
              </button>
              <span>{existProduct.amount}</span>
              <button onClick={() => dispatch(increaseAmount(product))}>
                +
              </button>
            </div>
          )
        ) : (
          <button onClick={() => dispatch(addToCart(product))}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
