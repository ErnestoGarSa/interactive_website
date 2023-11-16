import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mastering the web with JavaScript, React and Next.js",
  description: "Web project showcase by dev.ErnestoGarSa",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossOrigin="anonymous"
          ></script>
        </body>
      </html>
    </>
  );
}
