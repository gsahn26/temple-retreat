"use client";

import dynamic from "next/dynamic";
import { useAppStore } from "@/lib/store";
import LoginScreen from "@/components/ui/LoginScreen";

const TempleWorld = dynamic(() => import("@/components/TempleWorld"), {
  ssr: false,
  loading: () => (
    <div className="flex h-dvh w-dvw items-center justify-center bg-stone-900 text-amber-100">
      Loading temple...
    </div>
  ),
});

export default function Home() {
  const hasEntered = useAppStore((s) => s.hasEntered);
  return hasEntered ? <TempleWorld /> : <LoginScreen />;
}
