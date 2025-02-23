import { promises as fs } from "fs";
import path from "path";
import type { Work } from "@/types/work";

export async function getWorks(): Promise<Work[]> {
  try {
    const file = await fs.readFile(process.cwd() + "/data/works.json", "utf8");
    const data = JSON.parse(file) as { works: Work[] };

    if (!data.works || !Array.isArray(data.works)) {
      throw new Error("Invalid works data structure");
    }

    return data.works;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error loading works:", error.message);
    } else {
      console.error("Unknown error loading works");
    }
    return [];
  }
}

export async function getWork(slug: string): Promise<Work | undefined> {
  const works = await getWorks();
  const work = works.find((work) => work.id === slug);

  if (!work) return undefined;

  // Load content from MDX files
  const locale = ["en", "ja"];
  const content: Record<string, string> = {};

  for (const lang of locale) {
    const filePath = path.join(process.cwd(), `/content/${slug}/${lang}.mdx`);
    content[lang] = await fs.readFile(filePath, "utf8");
  }

  return { ...work };
}
