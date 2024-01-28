import './global.css'
import { Inter } from "next/font/google";

import Navbar from './components/navbar/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mishbnb | Airbnb clone!",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
