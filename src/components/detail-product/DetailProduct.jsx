"use client";
import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import "./detailProduct.scss";
import Image from "next/image";

const DetailProduct = ({ data }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="detail">
      <div className="detail__container container">
        <div className="detail__left">
          <div className="detail__img">
            <Image
              width={100}
              height={100}
              alt={data?.title}
              src={data?.images[0]}
            />
          </div>
          <h3 className="detail__name">{data?.title}</h3>
          <h4 className="detail__ship">🚚 FREE SHIPPING</h4>
        </div>
        <div className="detail__right">
          <h3 className="detail__title">{data?.title}</h3>
          <div className="detail__infos">
            <div className="detail__infos__left">
              <h3 className="detail__price">{data?.price}</h3>
              <h3 className="detail__quantity">Quantity</h3>
              <div className="detail__counter">
                <button
                  disabled={count === 0}
                  onClick={() => setCount((prev) => prev - 1)}
                >
                  -
                </button>
                <span>{count}</span>
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
              </div>
            </div>
            <div className="detail__infos__right">
              <div className="detail__item">
                <input type="radio" name="check" />
                <span>One time purchase</span>
              </div>
              <div className="detail__item">
                <input type="radio" name="check" />
                <span>Subscribe and delivery every </span>
                <select name="" id="">
                  <option value="4 weeks">4 weeks</option>
                  <option value="4 weeks">2 weeks</option>
                  <option value="4 weeks">3 weeks</option>
                </select>
              </div>
              <p className="detail__desc">
                {data?.description}
                <span>See details</span>
              </p>
              <button className="detail__btn">
                <IoCartOutline /> <span>+ Add to cart</span>
              </button>
            </div>
          </div>
          <div className="detail__information">
            <span>Wax</span>: Top grade Soy wax that delivers a smoke less,
            consistent burn <br />
            <span>Fragrance</span>: Premium quality ingredients with natural
            essential oils <br />
            <span>Burning Time</span>: 70-75 hours <span>Dimension</span>: 10cm
            x 5cm <span>Weight</span>: 400g <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
