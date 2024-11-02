import "../globals.css";

export const metadata = {
  title: "Profspective",
  description: "Simplify finding the next class you have to take at USf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
