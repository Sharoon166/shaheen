import { Button } from "@/components/ui/button";
import { LucideCode, LucideCode2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
         Bow to your sensai
      </main>
      <section>
        <Button size="sm" variant="destructive">Click me</Button>
      </section>
    </div>
  );
}
