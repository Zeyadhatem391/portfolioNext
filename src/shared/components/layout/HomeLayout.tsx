"use client";
import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import StarsBackground from "@/shared/components/StarsBackground";
import ScrollToTop from "@/shared/components/ScrollToTop";
import SocialMedia from "@/shared/components/SocialMedia";

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
      <ScrollToTop />
    </>
  );
}
