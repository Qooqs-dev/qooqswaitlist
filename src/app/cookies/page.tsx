import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import CookiesPolicyDetails from "./CookiesPolicyDetails";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero title={"Cookies Policy"} />
      <CookiesPolicyDetails />
      <Footer />
    </main>
  );
}
