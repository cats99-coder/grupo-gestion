import FormContact from "./FormContact";
import FormControl from "./FormControl";
import Input from "./Input";
import SelectDepartamento from "./SelectDepartamento";

export default function Footer() {
  return (
    <footer className="bg-gestion  md:h-screen text-white px-3 py-4 flex flex-col md:grid md:grid-cols-[1fr,min-content,1fr] gap-x-5 items-center justify-center">
      <div className="text-4xl font-bold flex flex-col items-center">
        <span>Llama hoy, y pide tu cita online</span>
        <a className="text-4xl md:text-7xl" href="tel:623433276">
          623 43 32 76
        </a>
      </div>
      <div className="flex justify-center h-full">
        <div className="w-2 bg-white hidden md:block h-full"></div>
      </div>
      <div className="space-y-3">
        <FormContact />
      </div>
    </footer>
  );
}
