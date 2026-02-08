"use client"

import { useState } from "react";
import Dropdown, { DropdownOption } from "./Dropdown";
import { ShopItem } from "@/src/types/shopItem";
import ShopItemCard from "./ShopItemCard";

export default function ShopMenu({ shopItems }: { shopItems: ShopItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("any");
  const [selectedCollection, setSelectedCollection] = useState<string>("any");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("any");
  const [selectedSort, setSelectedSort] = useState<string>("date-desc");

  const sortOptions: DropdownOption[] = [
    { id: "date-desc", text: "date, newer" },
    { id: "date-asc", text: "date, older" },
    { id: "price-asc", text: "price, higher" },
    { id: "price-desc", text: "price, lower" },
  ];

  const anyOption: DropdownOption = { id: "any", text: "any" };

  const uniqueOptions = (items: DropdownOption[]) =>
    [...new Map(items.map(i => [i.id, i])).values()];

  const categories = [anyOption, ...uniqueOptions(
    shopItems.map(i => ({ id: i.category._id, text: i.category.name.en }))
  )];

  const collections = [anyOption, ...uniqueOptions(
    shopItems.filter(i => i.collection).map(i => ({ id: i.collection!._id, text: i.collection!.name.en }))
  )];

  const materials = [anyOption, ...uniqueOptions(
    shopItems.filter(i => i.material).map(i => ({ id: i.material!._id, text: i.material!.name.en }))
  )];

  const sortBySelectedOption = (a: ShopItem, b: ShopItem): number => {
    switch (selectedSort) {
      case "date-asc":
        return new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime();
      case "date-desc":
        return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
      case "price-asc":
        return (b.price ?? 0) - (a.price ?? 0);
      case "price-desc":
        return (a.price ?? 0) - (b.price ?? 0);
      default:
        return 0;
    }
  };

  const filteredItems = shopItems
    .filter(item => selectedCategory === "any" || item.category._id === selectedCategory)
    .filter(item => selectedCollection === "any" || item.collection?._id === selectedCollection)
    .filter(item => selectedMaterial === "any" || item.material?._id === selectedMaterial)
    .sort(sortBySelectedOption);

  return (
    <>
      <div className="flex mb-6 gap-4">
        <Dropdown id="category" label="Category" onSelect={setSelectedCategory} options={categories} />
        <Dropdown id="sort-by" label="Sort By" onSelect={setSelectedSort} options={sortOptions} />
        <Dropdown id="material" label="Material" onSelect={setSelectedMaterial} options={materials} />
        <Dropdown id="colletion" label="Collection" onSelect={setSelectedCollection} options={collections} />
      </div>
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-3 gap-x-1 gap-y-6 min-h-[50vh]">
          {filteredItems.map(shopItem => (
            <ShopItemCard key={shopItem._id} href={`/shop/${shopItem.slug.current}`} shopItem={shopItem} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[70vh]">
          <p className="text-foreground/50">No items found</p>
        </div>
      )}
    </>
  );
}