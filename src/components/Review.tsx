export default function Review() {
  return (
    <div className="shadow-md shadow-black/60 w-full md:w-1/3 px-5 py-3">
      <div className="flex gap-x-3 items-center">
        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-blue-600">
          <p className="absolute text-center text-white font-bold">C</p>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Cristian Tabares</span>
          <span className="text-xs">hace 4 meses</span>
        </div>
      </div>
      <div className="text-center">
        &quot;Brindan un excelente servicio al cliente. No tengo mas que palabras
        de agradecimiento con todo el equipo. Se han portado de una manera
        increíble conmigo y me mantienen al tanto de todo lo que va sucediendo
        respecto a mis trámites de forma expedita y super eficiente.Totalmente
        recomendable&quot;
      </div>
    </div>
  );
}
