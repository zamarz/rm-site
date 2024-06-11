import Extra from "@/components/Extra";
import Intro from "@/components/Intro";
import Match from "@/components/Match";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Intro />
      <Skills />
      <Match />
      <Extra />
    </main>
  );
}
