export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose mx-auto max-w-2xl p-4 md:px-0 md:py-6">
      {children}
    </div>
  );
}
