import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import WaitlistDetails from "./WaitlistDetails";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero title={"WaitList Submissions"} />
      <WaitlistDetails />
      <Footer />
    </main>
  );
}
