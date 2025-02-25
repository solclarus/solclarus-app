import type { Work } from "@/types/work";
import { works } from "@/data/works";

export async function getWorks(): Promise<Work[]> {
  try {
    return works;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error loading works";

    console.error(`Error loading works: ${errorMessage}`);
    return [];
  }
}

export async function getWork(slug: string): Promise<Work | undefined> {
  try {
    return works.find((work) => work.id === slug);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    console.error(`Error loading works "${slug}": ${errorMessage}`);
  }

  return undefined;
}
