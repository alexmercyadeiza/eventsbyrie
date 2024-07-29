import "./globals.css";

export const metadata = {
  title: "Events by Rie",
  description: "Catering Re-imagined (where food becomes art).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
