import "./globals.scss";

export const metadata = {
  title: "Konstralab",
  description: "Konstralab Industries",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <html lang={locale || "az"}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
