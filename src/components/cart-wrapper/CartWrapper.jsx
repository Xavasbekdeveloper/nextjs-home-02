"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../empty/Empty";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  decreaseAmount,
  increaseAmount,
  removeCart,
} from "@/lib/features/cart/cartSlice";
import Link from "next/link";
import Image from "next/image";
import "./cartWrapper.scss";

const CartWrapper = () => {
  const [voucher, setVoucher] = useState(0);
  const [coupon, setCoupon] = useState("");

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.value);
  const wishlistData = useSelector((state) => state.wishlist.data);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const calculateAllPrice = () => {
    let total = cartData?.reduce(
      (sum, item) => sum + item?.amount * item?.price,
      0
    );
    return total.toFixed(2);
  };

  return (
    <>
      {cartData.length ? (
        <section className="cart">
          <div className="container">
            <div className="cart__box">
              <div className="cart__box__top">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
              </div>
              <div className="cart__box__bottom">
                {cartData?.map((product) => (
                  <div key={product.id} className="cart__box__bottom__item">
                    {/*  */}
                    <div className="cart__box__bottom__item__left">
                      <button
                        onClick={() => dispatch(removeCart(product))}
                        className="cart__box__bottom__item__remove-btn"
                      >
                        {" "}
                        <IoClose />
                      </button>
                      <div>
                        <Link href={`/product/${product.id}`}>
                          <Image
                            width={100}
                            height={100}
                            src={product?.images[0]}
                            alt={product?.title}
                          />
                        </Link>
                        <Link href={`/product/${product.id}`}>
                          <h3 title={product?.title}>{product?.title}</h3>
                        </Link>
                      </div>
                    </div>
                    {/*  */}
                    <span>${product?.price}</span>
                    {/*  */}
                    <div className="cart__box__bottom__item-btn">
                      <button
                        disabled={product?.amount <= 1}
                        onClick={() => dispatch(decreaseAmount(product))}
                      >
                        <FaMinus />
                      </button>
                      <span>{product?.amount}</span>
                      <button
                        disabled={product?.rating?.count <= product?.amount}
                        onClick={() => dispatch(increaseAmount(product))}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    {/*  */}
                    <span className="cart__box__bottom__item-price">
                      ${(product?.price * product?.amount).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom__left">
                <h3>Sub-total: {calculateAllPrice()}$</h3>
                <p>Tax and shipping cost will be calculated later</p>
              </div>
              <button>Check-Out</button>
            </div>
          </div>
        </section>
      ) : (
        <Empty
          img={
            "https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
          }
        />
      )}
    </>
  );
};

export default CartWrapper;
