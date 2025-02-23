export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose mx-auto max-w-2xl px-4 dark:prose-invert md:px-0">
      {children}
    </div>
  );
}
