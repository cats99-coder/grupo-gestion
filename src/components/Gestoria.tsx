import Include from "./Include";

export default function Gestoria() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Tráfico</h2>
        <Include text="Transferencias" />
        <Include text="Canjes de permisos extranjeros" />
        <Include text="Duplicados" />
        <Include text="Renovaciones" />
        <Include text="Bajas definitivas" />
        <Include text="Altas" />
        <Include text="Matriculaciones" />
        <Include text="Placas verdes" />
        <Include text="Distintivos medioambientales" />
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Subvenciones y ayudas</h2>
        <Include text="Subvenciones y ayudas estatales" />
        <Include text="Subvenciones y ayudas autonómicas" />
        <Include text="Subvenciones y ayudas locales" />
        <Include text="Prestaciones seguridad social y pensiones (contributivas y no contributivas" />
        <Include text="Incapacidad temporal" />
      </div>
    </div>
  );
}
