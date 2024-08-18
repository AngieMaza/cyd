/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div
          className="xl:ml-[100px] bg-left-top bg-no-repeat w-full flex flex-col xl:flex-row gap-8 justify-center items-center"
          style={{ backgroundImage: "url('background2.png')" }}
        >
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8754.338723345827!2d-58.659754504513565!3d-34.452620666853456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca3839ea18e73%3A0xa687cf0216cc30af!2sAv.%20Constituyentes%201911%2C%20B1617%20Gral.%20Pacheco%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721929701980!5m2!1ses!2sar"
            loading="lazy"
            className="h-[500px] w-full lg:h-[80%] p-6 xl:p-0"
          />
          <div className="flex flex-col gap-4 mt-4 text-black font-semibold h-[80%] justify-start w-full px-4 ">
            <div className="flex gap-2 items-center">
              <img src="location.svg" alt="pin img" height={48} width={48} />
              <p>Av. Constituyentes 1911, General Pacheco, Buenos Aires</p>
            </div>
            <div className="flex gap-2 items-center">
              <a href="https://wa.me/+5491125049785">
                <img
                  src="whatsapp.svg"
                  alt="whatsapp logo"
                  height={48}
                  width={48}
                />
              </a>
              <p>+54 11 2504-9785</p>
            </div>
            <div className="flex gap-2 items-center">
              <a href="mailto:pintureriacyd@gmail.com">
                <img src="gmail.svg" alt="email img" height={48} width={48} />
              </a>
              <p>pintureriacyd@gmail.com</p>
            </div>
            <div>
              <p>Redes:</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/pintureriacyd/">
                  <img
                    src="instagram.svg"
                    alt="instagram logo"
                    height={48}
                    width={48}
                  />
                </a>
                <a href="https://www.facebook.com/pintureria.c.y.D">
                  <img
                    src="facebook.svg"
                    alt="facebook logo"
                    height={48}
                    width={48}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
