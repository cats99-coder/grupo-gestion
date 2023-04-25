import { ReactNode } from "react";

export default function FormControl({ children, label }: { children: ReactNode, label: string }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="">{label}</label>
      {children}
    </div>
  );
}
