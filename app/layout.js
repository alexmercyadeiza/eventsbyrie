import "./globals.css";

export const metadata = {
  title: "Events by Rie",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
