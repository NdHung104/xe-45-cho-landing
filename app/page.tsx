import Hero from "@/components/hero/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Fleet from "@/components/Fleet";
import Gallery from "@/components/Gallery";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <section id="services" className=" bg-gray-50">
        <Services />
      </section>

      <section id="why-choose" className="">
        <WhyChoose />
      </section>

      <section id="fleet" className=" bg-gray-50">
        <Fleet />
      </section>

      <section id="gallery" className="">
        <Gallery />
      </section>

      <section id="contact" className="">
        <ContactCTA />
      </section>
    </main>
  );
}
