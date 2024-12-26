import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Login from "./Login";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero title={"Admin Login"} />
      <Login />
      <Footer />
    </main>
  );
}
