import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import PrivacyPolicyDetails from "./PrivacyPolicyDetails";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero title={"Privacy Policy"} />
      <PrivacyPolicyDetails />
      <Footer />
    </main>
  );
}
