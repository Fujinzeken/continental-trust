import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Continental Trust Risk Retention Group",
  description:
    "A specialty insurer providing commercial auto liability coverage to motor carriers. Domiciled in South Carolina.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div id="top" className="flex flex-1 flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
