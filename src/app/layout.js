import { FileProvider } from "@/provider/FileProvider";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/provider/AuthProvider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DataVizTrack || Home",
  description: "CSV To Chart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FileProvider>
          <AuthProvider>
            <Navbar></Navbar>
            <div className="py-14"></div>
            {children}
            <Footer></Footer>
          </AuthProvider>
        </FileProvider>
      </body>
    </html>
  );
}
