import "./globals.scss";

export const metadata = {
  title: "Konstralab",
  description: "Konstralab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
