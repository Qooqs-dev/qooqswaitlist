import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import TermsDetails from "./TermsDetails";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero title = {"Terms and Conditions"} />
      <TermsDetails />
      <Footer />
    </main>
  );
}
