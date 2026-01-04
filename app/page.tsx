import { Categories } from "@/components/home/Categories";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <main className="page">
        <Hero />
        <Marquee />
        <Categories />
        <Process />
      </main>
    </>
  );
}
