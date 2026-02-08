import { SanityDocument, SanityReference } from "next-sanity";

export interface SanityImage {
  _type: "image";
  _key: string;
  asset: SanityReference;
}

export interface ShopItem extends SanityDocument {
  name: { ru: string; en: string };
  description: { ru: string; en: string };
  slug: { current: string };
  category: { _id: string, name: { ru: string, en: string } };
  images: SanityImage[];
  price?: number;
  year?: number;
  collection?: { _id: string, name: { ru: string, en: string } };
  material?: { _id: string, name: { ru: string, en: string } };
  size?: {
    width?: number;
    height?: number;
    depth?: number;
  };
}