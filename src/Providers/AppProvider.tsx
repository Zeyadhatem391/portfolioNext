import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";

interface Props {
  children: ReactNode;
}
export default function AppProviders({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
