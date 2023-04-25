import Abogacia from "@/components/Abogacia";
import CarouselReview from "@/components/CarouselReview";
import Front from "@/components/Front";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  const serviciosAbogacia = [
    "Representación legal en casos de derecho mercantil",
    "Gestión de procesos judiciales y litigios",
    "Protección y gestión de la propiedad intelectual",
    "Redacción y revisión de contratos",
    "Gestión de temas relacionados con el derecho laboral",
    "Resolución de conflictos y mediación",
    "Defensa legal en casos de derecho penal",
    "Asesoramiento y gestión en temas de derecho internacional",
    "Resolución de conflictos en derecho de la familia",
    "Asesoramiento y gestión en temas de derecho administrativo",
  ];
  const serviciosFiscal = [
    "Planificación y gestión fiscal de empresas",
    "Asesoramiento en materia de impuestos y tributos",
    "Gestión de obligaciones fiscales y presentación de declaraciones",
    "Optimización de la carga tributaria de empresas y particulares",
    "Análisis de riesgos fiscales",
    "Asesoramiento en procesos de reestructuración empresarial",
    "Asesoramiento en procesos de fusión y adquisición de empresas",
    "Auditoría fiscal y revisión de declaraciones y liquidaciones",
    "Asistencia en inspecciones y procedimientos tributarios",
    "Elaboración de informes y dictámenes fiscales",
  ];
  const serviciosGestoria = [
    "Asesoramiento contable y financiero",
    "Gestión y tramitación de subvenciones y ayudas",
    "Gestión de impuestos y obligaciones fiscales",
    "Asesoramiento y gestión laboral",
    "Gestión de nóminas y seguros sociales",
    "Tramitación de altas, bajas y modificaciones de empresas y autónomos",
    "Confección y presentación de libros contables y cuentas anuales",
    "Gestión de patrimonios y herencias",
    "Gestión de documentos y certificados electrónicos",
    "Asesoramiento y gestión en materia de protección de datos",
  ];
  return (
    <main className="bg-white">
      <div className="fondo flex flex-col md:grid md:grid-cols-2  md:h-[80vh]">
        <div className="difuminado flex flex-col space-y-5 rounded-md rounded-t-none p-5">
          <Front />
        </div>
        <div></div>
      </div>
      <div className="px-4 md:px-8">
        <div
          style={{ marginBottom: "5rem" }}
          className="relative pt-10 bg-white"
        >
          <Section
            style={{ top: "4rem" }}
            title="ABOGACÍA"
            relleno={<Abogacia />}
            id="abogacia"
            servicios={serviciosAbogacia}
          >

            <Section
              style={{ top: "8rem" }}
              title="GESTORÍA"
              id="gestoria"
              servicios={serviciosGestoria}
            >
              <Section
                style={{ top: "12rem" }}
                title="FISCAL"
                id="fiscal"
                servicios={serviciosFiscal}
              />
            </Section>
          </Section>
          <div className="w-full bg-white -bottom-20 absolute h-32 z-40"></div>
        </div>
      </div>
      <CarouselReview />
    </main>
  );
}
