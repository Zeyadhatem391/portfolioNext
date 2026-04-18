"use client";
import { ReactNode } from "react";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import StarsBackground from "@/app/components/StarsBackground";
import ScrollToTop from "@/app/components/ScrollToTop";
import SocialMedia from "@/app/components/SocialMedia";

interface Props {
  children: ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <StarsBackground />
      <Navbar />
      {children}
      <SocialMedia />
      <Footer />
      <ScrollToTop />
    </>
  );
}
