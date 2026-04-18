import { ReactNode } from "react";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

interface Props {
  children: ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
