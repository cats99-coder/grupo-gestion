import Header from "@/components/Header";
import "./globals.css";
import FormContact from "@/components/FormContact";

export const metadata = {
  title: "Grupo Gestión",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <FormContact />
      </body>
    </html>
  );
}
