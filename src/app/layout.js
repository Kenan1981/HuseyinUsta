import { Cards } from "@/components/cards/cards";
import { CustomFooter } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Spacer } from "@/components/spacer/spacer";

export const metadata = {
  title: "Hüseyin USTA",
  description: "Scania",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Spacer />
        <h1 className="text-center" style={{ fontSize: "2rem",color:"red" }}>"Hüseyin USTA"  Tamir Bakım Servisi</h1>
        <Spacer/>

        {children}
        <Spacer />
        <Cards/>
        <CustomFooter />
      </body>
    </html>
  );
}
