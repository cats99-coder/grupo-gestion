export default function SelectDepartamento({
  value,
}: {
  value: "ABOGACIA" | "GESTORIA" | "FISCAL";
}) {
  return (
    <ul className="flex justify-between p-2 rounded-md bg-white text-black">
      <li className={`li-one ${value === "ABOGACIA" ? "selected" : ""}`}>
        Abogacía
      </li>
      <li className={`li-one ${value === "GESTORIA" ? "selected" : ""}`}>
        Gestoría
      </li>
      <li className={`li-one ${value === "FISCAL" ? "selected" : ""}`}>
        Fiscal
      </li>
    </ul>
  );
}
