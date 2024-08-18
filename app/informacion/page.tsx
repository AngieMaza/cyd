"use client";
import Header from "@/components/Header";
import React from "react";
const Page: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div
          className="bg-bottom bg-no-repeat w-full px-4 py-4 lg:px-16 flex flex-col gap-8 lg:gap-16 lg:justify-center overflow-scroll lg:overflow-hidden"
          style={{ backgroundImage: "url('background4.png')" }}
        >
          <div className="flex flex-col gap-4 lg:gap-8 justify-center items-start max-w-[1024px]">
            <h1 className="text-xl font-extrabold">
              La atención personalizada marca la diferencia
            </h1>
            <p className="font-bold">
              Somos una pinturería atendida por sus dueños, comprometidos con
              ofrecerte la mejor atención y asesoramiento en todos tus proyectos
              de pintura y decoración. Nuestro equipo está aquí para ayudarte a
              encontrar los productos que mejor se adaptan a tus necesidades, ya
              sea para tu hogar, oficina o cualquier otro espacio.
            </p>
            <div>
              <p className="text-xl font-extrabold">Horarios de atención:</p>
              <p className="font-bold">
                Lunes a Viernes: 8:00 a 12:30 - 14:00 a 18:00
              </p>
              <p className="font-bold">Sábados: 9:00 - 13:00</p>
              <p className="font-bold">Domingos: Cerrado</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8 justify-center items-start max-w-[1024px]">
            <h1 className="text-xl font-extrabold">
              ¡Aprovechá nuestras promociones bancarias y cuotas sin interés!
            </h1>
            <p className="font-bold">
              Te brindamos facilidades de pago para que puedas realizar tus
              compras sin preocupaciones. Consultá nuestras promociones
              bancarias y aprovecha la posibilidad de pagar en cuotas sin
              interés con las principales tarjetas. ¡No dejes pasar esta
              oportunidad!
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:gap-8 justify-center items-start max-w-[1024px]">
            <h1 className="text-xl font-extrabold">
              Punto de venta oficial de Einhell y KWB
            </h1>
            <p className="font-bold">
              En nuestra pinturería, somos orgullosos distribuidores de las
              reconocidas marcas Einhell y KWB. Aquí encontrarás una amplia gama
              de herramientas y accesorios de alta calidad, perfectos para todo
              tipo de trabajos. Ya sea que seas un profesional o un aficionado,
              te ofrecemos lo mejor para tus proyectos.
            </p>
            <div  className="flex gap-4 flex-col lg:flex-row lg:gap-20">
              <div className="h-[80px] lg:h-[100px]">
                <img src="einhell.png" alt="logo einhell" className="max-h-[80px] lg:max-h-[100px]" />
              </div>
              <div className="h-[80px]">
                <img src="kwb.png" alt="logo kwb" className="max-h-[80px] lg:max-h-[100px]"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
