import Header from "../components/Header";
import "./globals.css"; // global css settings and tailwind

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>App Store</title>
        <meta name="description" content="App store" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
