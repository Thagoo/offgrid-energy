import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTitleToURL = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]/g, "-");
};
