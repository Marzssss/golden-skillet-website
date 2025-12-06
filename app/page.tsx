import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Menu />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}
