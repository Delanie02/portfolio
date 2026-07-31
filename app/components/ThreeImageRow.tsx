import Image from "next/image";

interface ImageCardItem {
  header: string;
  subheader: string;
  src: string;
  alt: string;
}

interface ThreeImageRowProps {
  items: [ImageCardItem, ImageCardItem, ImageCardItem];
}

export default function ThreeImageRow({ items }: ThreeImageRowProps) {
  return (
    <div className="motion-scroll-reveal flex flex-col md:flex-row gap-6 mb-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col flex-1">
          {/* Header & Subheader */}
          <div>
            <p className="h5-bold text-neutral-dark text-center mb-3">{item.header}</p>
            <p className="body-sm text-neutral-mid text-center mb-3">{item.subheader}</p>
          </div>

          {/* Image */}
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
