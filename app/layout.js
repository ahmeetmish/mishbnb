import './global.css'
import { Inter } from "next/font/google";

import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mishbnb | Airbnb clone!",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
          <RegisterModal />
          <ToasterProvider />
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}