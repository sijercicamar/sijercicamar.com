import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: SITE.jobTitle,
  image: `${SITE.url}/amar.jpg`,
  email: `mailto:${SITE.email}`,
  sameAs: [SITE.linkedin],
  knowsAbout: [...SITE.keywords],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
};

export default function Home() {
  return (
    <main>
      <JsonLd data={personLd} />
      <JsonLd data={websiteLd} />
      <Nav />
      <Hero />
      <Work />
      <About />
      <Footer />
    </main>
  );
}
