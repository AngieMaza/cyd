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
          className=" p-4 lg:pr-[120px] bg-left-bottom bg-no-repeat w-full flex justify-center lg:justify-end items-start lg:items-center"
          style={{ backgroundImage: "url('background.png')"}}
        >
            <Slider />
        </div>
      </main>
    </>
  );
}
