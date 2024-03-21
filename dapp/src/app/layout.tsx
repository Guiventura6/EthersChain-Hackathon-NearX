import Header from "@/components/header";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Footer from "@/components/footer";

export const metadata = {
  title: "CompletaCopa 3.0",
  description: "Album da copa NFT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
