import Conferences from "./_components/conferences";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <main className="h-auto w-full">
      <Hero />
      <Conferences />
    </main>
  );
}
