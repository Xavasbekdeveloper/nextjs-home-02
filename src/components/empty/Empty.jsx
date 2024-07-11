"use client";
import React from "react";
import "./empty.scss";
import { useRouter } from "next/navigation";

const Empty = ({ img }) => {
  const router = useRouter();
  return (
    <div className="container">
      <div className="empty">
        <img src={img} alt="empty img" />{" "}
        <button onClick={() => router.push("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default Empty;
