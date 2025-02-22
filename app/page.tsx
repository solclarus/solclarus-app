import { env } from "@/env";

export default function Home() {
  const url = env.DEBUG_URL;

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <h1 className="text-xl">Hello</h1>
      <p className="text-sm text-gray-500">{url}</p>
    </div>
  );
}
