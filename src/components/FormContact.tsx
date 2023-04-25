import FormControl from "./FormControl";
import Input from "./Input";
import SelectDepartamento from "./SelectDepartamento";

export default function FormContact() {
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
        <SelectDepartamento value="ABOGACIA" />
        <form className="bg-white text-black p-5 rounded-md space-y-3">
          <FormControl label="Email">
            <Input type="email" />
          </FormControl>
          <FormControl label="Teléfono">
            <Input type="number" />
          </FormControl>
          <FormControl label="Mensaje">
            <textarea
              className="border-2 px-3 py-1 border-black rounded-md"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </FormControl>
          <button className="bg-gestion hover:bg-red-400 p-2 rounded-md w-full text-white font-bold">
            Enviar
          </button>
        </form>
      </div>
    </footer>
  );
}
