import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
interface Props {
  children: ReactNode;
}
export default function AppProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </ThemeProvider>
  );
}
