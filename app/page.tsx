import Intro from "@/components/Intro";
import Match from "@/components/Match";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <Skills />
      <Match />
    </main>
  );
}
