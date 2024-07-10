"use client";
import React from "react";
import "./hero.scss";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/lib/features/counter/counterSlice";

const Hero = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h2 className="hero__img">🌱</h2>
        <h3 className="hero__title">The nature candle</h3>
        <p className="hero__desc">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>
        <button onClick={() => dispatch(increment())} className="hero__btn">
          Discover our collection {count}
        </button>
      </div>
    </div>
  );
};

export default Hero;
