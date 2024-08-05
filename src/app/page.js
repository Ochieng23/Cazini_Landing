import CallToAction from "@/components/CallToAction";
import FeaturedJobs from "@/components/FeaturedJobs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import How from "@/components/How";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <How />
        <CallToAction />
        <FeaturedJobs />
      </main>
      <Footer />
    </>
  );
}
