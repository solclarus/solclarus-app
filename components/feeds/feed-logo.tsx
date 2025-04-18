import Image from "next/image";

type Props = {
  id: string;
  title: string;
  size: number;
};

export function FeedLogo({ id, title, size }: Props) {
  return (
    <div
      className="overflow-hidden rounded-full border bg-white p-0.5"
      style={{ width: size, height: size }}
    >
      <Image
        src={`/images/feeds/${id}.svg`}
        alt={`${title} logo`}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
}
