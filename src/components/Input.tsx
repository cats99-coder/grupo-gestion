export default function Input({ type = "text" }: { type: string }) {
  return (
    <input className="border-2 px-3 py-1 border-black rounded-md" type={type} />
  );
}
