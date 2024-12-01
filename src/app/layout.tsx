// imports
import localFont from "next/font/local";
// css
import "@/styles/global.css";

const openSauceTwo = localFont({
  src: [
    {
      path: "../assets/fonts/open-sauce-two/OpenSauceTwo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/open-sauce-two/OpenSauceTwo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/open-sauce-two/OpenSauceTwo-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/open-sauce-two/OpenSauceTwo-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-open-sauce-two",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSauceTwo.variable} font-sans bg-background leading-relaxed text-foreground-main antialiased selection:bg-accent/50 selection:foreground-main`}
      >
        {children}
      </body>
    </html>
  );
}
