import Include from "./Include";

export default function Fiscal() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Derecho Laboral</h2>
        <Include text="Contratos" />
        <Include text="Nóminas" />
        <Include text="Confección de seguros sociales y toda gestión relacionada con las altas/bajas de trabajadores de empresarios" />
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Derecho de seguros</h2>
        <Include text="Presupuestamos la mejor compañiamen precio y prestaciones para cualquier necesidad. Vehículos, Hogar, Salud,..." />
      </div>
    </div>
  );
}
