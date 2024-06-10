import Extra from "@/components/Extra";
import Intro from "@/components/Intro";
import Match from "@/components/Match";
import Skills from "@/components/Skills";
import WhyMe from "@/components/WhyMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <WhyMe />
      <Match />
      <Skills />
      <Extra />
    </main>
  );
}
