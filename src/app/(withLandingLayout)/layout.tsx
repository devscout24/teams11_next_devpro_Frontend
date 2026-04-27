
import Footer from "../component/teams/layout/Footer";
import Navbar from "../component/teams/layout/Navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer />
    </>
  );
}
