import Include from "./Include";

export default function Abogacia() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Derecho Civil</h2>
        <div className="grid grid-cols-3 gap-2">
          <Include text="Separación" />
          <Include text="Divorcio" />
          <Include text="Contratos" />
          <Include text="Herencia y testamentos" />
          <Include text="Derecho al honor" />
          <Include text="Derecho deportivo" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Derecho Penal</h2>
        <Include text="Asesoramiento y defensa para todo tipo de delitos y fallas" />
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Derecho Mercantil</h2>
        <div className="grid grid-cols-3 gap-2">
          <Include text="Sociedades, Propiedad Intelectual" />
          <Include text="Derecho concursal" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Derecho Hipotecario y Bancario</h2>
        <div className="grid grid-cols-3 gap-2">
          <Include text="Dación en pago" />
          <Include text="Claúsulas suelo" />
          <Include text="Ejecuciones hipotecarias" />
          <Include text="Renegociacionesde deuda con entidades bancarias" />
        </div>
      </div>
    </div>
  );
}
