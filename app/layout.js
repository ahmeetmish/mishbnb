import './global.css'
import { Inter } from "next/font/google";

import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mishbnb | Airbnb clone!",
  description: "",
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}