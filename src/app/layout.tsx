import "@/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background leading-relaxed text-foreground-main antialiased selection:bg-accent selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
