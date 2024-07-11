"use client";
import { defaultCart } from "@/lib/features/cart/cartSlice";
import { defaultWishlist } from "@/lib/features/wishlist/wishlistSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const DefaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultWishlist(JSON.parse(localStorage.getItem("like")) || []));
    dispatch(defaultCart(JSON.parse(localStorage.getItem("cart")) || []));
  }, []);
  return null;
};

export default DefaultValues;
