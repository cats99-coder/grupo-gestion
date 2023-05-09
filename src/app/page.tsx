import Abogacia from "@/components/Abogacia";
import CarouselReview from "@/components/CarouselReview";
import Fiscal from "@/components/Fiscal";
import Front from "@/components/Front";
import Section from "@/components/Section";

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
    "Contratos",
    "Nóminas",
    "Confección de seguros sociales",
    "Gestiones relacionadas con las altas/bajas de trabajadores de empresarios",
    "Presupuestamos la mejor compañia en precio y prestaciones para cuelquier necesitad. Vehículos, Hogar, Salaud...",
  ];
  const serviciosGestoria = [
    "Transferencias",
    "Canjes de permisos extranjeros",
    "Duplicados",
    "Renovaciones",
    "Bajas temporales",
    "Bajas definitivas",
    "Altas",
    "Matriculaciones",
    "Placas verdes",
    "Distintivos medioambientales",
    "Subvenciones y ayudas",
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
            servicios={[]}
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
                relleno={<Fiscal />}
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
