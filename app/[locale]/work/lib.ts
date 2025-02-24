import type { Work } from "@/types/work";
import works from "@/data/works.json";

export async function getWorks(): Promise<Work[]> {
  try {
    if (!works.works || !Array.isArray(works.works)) {
      throw new Error("Invalid works data structure");
    }

    return works.works;
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
  const allWorks = await getWorks();
  const work = allWorks.find((work) => work.id === slug);

  if (!work) return undefined;

  return { ...work };
}
