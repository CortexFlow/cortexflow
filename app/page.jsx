"use client";
import React from "react";
import HomePage from "../components/Pages/HomePage";
import "../styles/style.css";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden" data-bs-spy="scroll">
        <HomePage />
      </div>
    </>
  );
}
