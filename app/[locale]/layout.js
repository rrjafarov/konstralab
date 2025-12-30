import "./globals.scss";

export const metadata = {
  title: "Konstralab",
  description: "Konstralab Industries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
