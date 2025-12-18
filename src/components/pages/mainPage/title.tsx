import React from "react";

import "./title.css";
import ButtonDesign1 from "../../utils/buttons/buttonDesign1";

const Title = () => {
  return (
    <section className="title">
      <div className="px-4 mx-auto max-w-screen-xl text-center pt-6 ">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none">
          Bienvenidas a Manos de Diosa
        </h1>
        <p className="mb-8 text-lg text-gray-600 text-bold lg:text-xl sm:px-16 lg:px-48">
          Un espacio de belleza, precisión y elegancia en cada detalle.
          Especialista en uñas, cejas y pestañas. Ofrezco servicios
          personalizados y capacitaciones profesionales en manicuría.{" "}
        </p>
        <div className="flex gap-4 justify-center">
          <ButtonDesign1
            onClick={() => console.log("")}
            size="lg"
            className="titleButtonServices"
            textColor="white"
          >
            Ver Servicios
          </ButtonDesign1>
          <ButtonDesign1
            onClick={() => console.log("")}
            size="lg"
            className="titleButtonContact"
            textColor="white"
          >
            Contactar
          </ButtonDesign1>
        </div>
      </div>
    </section>
  );
};

export default Title;


