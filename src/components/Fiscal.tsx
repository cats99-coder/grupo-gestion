import Include from "./Include";

export default function Fiscal() {
  return (
    <div className="grid grid-cols-2">
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Derecho Laboral</h2>
        <Include text="Contratos" />
        <Include text="Nómina" />
        <Include text="Confección de seguros sociales y toda gestión relacionada con las altas/bajas de trabajadores de empresarios" />
        <Include text="Herencia y testamentos" />
        <Include text="Derecho al honor" />
        <Include text="Derecho deportivo" />
      </div>
    </div>
  );
}
