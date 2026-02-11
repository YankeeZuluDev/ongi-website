import { Project } from "@/src/types/project";
import Header from "./Header";
import Section from "./Section";
import Text from "./Text";
import Image from "next/image";
import { urlFor } from "@/src/sanity/client";

const minBlockHeightStyleMap: Record<string, string> = {
  "small": "min-h-[340px]",
  "medium": "min-h-[540px]",
  "large": "min-h-[740px]",
  "extraLarge": "min-h-[940px]"
};

const colSpanStyleMap: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11"
};

export default function ProjectSection({ project }: { project: Project }) {
  const isTextLight = project.textBlockBgColor === "dark";
  const isImageBlockSideRight = project.imageBlockSide === "right"; 
  const minBlockHeightStyle = minBlockHeightStyleMap[project.imageHeight];
  const imageBlockColSpanStyle = colSpanStyleMap[project.imageColumns];
  const textBlockColSpanStyle = colSpanStyleMap[12 - project.imageColumns];
  const textBlockBackgroundStyle = project.textBlockBgColor === "dark" ? "bg-foreground" : "bg-background";

  return (
    <Section>
      <div className={`grid grid-cols-12 ${minBlockHeightStyle}`}>
        <div className={`${textBlockColSpanStyle} flex items-center ${textBlockBackgroundStyle} px-15 ${isImageBlockSideRight ? "order-1" : "order-2"}`}>
          <div>
            <Header light={isTextLight}>{project.name.en}</Header>
            <Text light={isTextLight}>{project.description.en}</Text>
          </div>
        </div>
        <div className={`relative ${imageBlockColSpanStyle} ${isImageBlockSideRight ? "order-2" : "order-1"}`}>
          <Image src={urlFor(project.image).url()} alt="123" fill className="object-cover" />
        </div>
      </div>
    </Section>
  );
}