import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";

export default function Home() {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
    </div>
  );
}
