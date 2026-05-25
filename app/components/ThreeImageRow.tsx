import Image from 'next/image';

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
    <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col flex-1">

          {/* Header & Subheader */}
          <div className="mb-3 min-h-[40px] md:min-h-[80px]">
            <p className="body-base-bold hidden lg:block text-neutral-dark text-center">{item.header}</p>
            <p className="body-sm-bold lg:hidden text-neutral-dark text-center">{item.header}</p>
            <p className="body-sm text-neutral-dark text-center">{item.subheader}</p>
          </div>

          {/* Image */}
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              className="w-full h-autoobject-cover"
            />
          </div>

        </div>
      ))}
    </div>
  );
}
