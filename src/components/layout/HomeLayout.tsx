import { ReactNode } from "react";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

interface Props {
  theme?: "light" | "dark";
  children: ReactNode;
}

export default function HomeLayout({ children, theme }: Props) {
  return (
    <>
      <Navbar theme={theme} />
      {children}
      <Footer />
    </>
  );
}
