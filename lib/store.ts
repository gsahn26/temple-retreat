import { create } from "zustand";
import type { Locale } from "./i18n";

export type OutfitColor = "gray" | "indigo" | "saffron" | "white";
export type HairStyle = "short" | "bald" | "long";

export type ZoneId = "courtyard" | "hall" | "room";
export type ActivityId = "bowing" | "resting" | "sweeping" | null;

interface AppState {
  nickname: string;
  locale: Locale;
  hasEntered: boolean;
  outfit: OutfitColor;
  hair: HairStyle;
  currentZone: ZoneId;
  activity: ActivityId;
  nearbyActivity: ActivityId;
  customizeOpen: boolean;

  setNickname: (name: string) => void;
  setLocale: (locale: Locale) => void;
  enter: () => void;
  setOutfit: (outfit: OutfitColor) => void;
  setHair: (hair: HairStyle) => void;
  setCurrentZone: (zone: ZoneId) => void;
  setActivity: (activity: ActivityId) => void;
  setNearbyActivity: (activity: ActivityId) => void;
  setCustomizeOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  nickname: "",
  locale: "ko",
  hasEntered: false,
  outfit: "gray",
  hair: "short",
  currentZone: "courtyard",
  activity: null,
  nearbyActivity: null,
  customizeOpen: false,

  setNickname: (nickname) => set({ nickname }),
  setLocale: (locale) => set({ locale }),
  enter: () => set({ hasEntered: true }),
  setOutfit: (outfit) => set({ outfit }),
  setHair: (hair) => set({ hair }),
  setCurrentZone: (currentZone) => set({ currentZone }),
  setActivity: (activity) => set({ activity }),
  setNearbyActivity: (nearbyActivity) => set({ nearbyActivity }),
  setCustomizeOpen: (customizeOpen) => set({ customizeOpen }),
}));
