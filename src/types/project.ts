import { SanityDocument } from "next-sanity";
import { SanityImage } from "./shopItem";

export interface Project extends SanityDocument {
  name: { ru: string; en: string };
  description: { ru: string; en: string };
  projectType: "public" | "residential";
  image: SanityImage;
  imageBlockSide: "left" | "right";
  imageColumns: number;
  imageHeight: "small" | "medium" | "large" | "extraLarge";
  textBlockBgColor: "light" | "dark";
  displayOrder: number;
}