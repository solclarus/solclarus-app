import { format } from "date-fns";

export function Footer() {
  return (
    <footer className="sticky top-full py-6">
      <p className="m-0 text-center text-sm text-muted-foreground">
        &copy; {format(Date(), "yyyy")} solclarus
      </p>
    </footer>
  );
}
