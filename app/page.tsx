/* eslint-disable @next/next/no-img-element */
"use client";
import Slider from "../components/Slider";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div
          className=" pr-[120px] bg-left-bottom bg-no-repeat w-full flex justify-end items-center"
          style={{ backgroundImage: "url('background.png')" }}
        >
          <Slider />
        </div>
      </main>
    </>
  );
}
