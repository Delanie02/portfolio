// components/TwoImageGroup.tsx
import Image from 'next/image';

interface TwoImageGroupProps {
  images: {
    src: string;
    alt: string;
    header: string;
    subheader: string;
  }[];
  captions: { label: string; value: string }[];
}

export default function TwoImageGroup({ images, captions }: TwoImageGroupProps) {
  return (
    <div className="flex flex-col">

      {/* Two Images Side by Side */}
      <div className="flex flex-col md:flex-row gap-6">
        {images.map((image, index) => (
          <div key={index} className="w-full md:w-1/2 flex flex-col">

            {/* Caption above image */}
            <div className="mb-3">
              <p className="body-base-bold text-neutral-dark">{image.header}</p>
              <p className="body-sm text-neutral-dark">{image.subheader}</p>
            </div>

            {/* Image — fixed height so both match */}
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-top"
              />
            </div>

          </div>
        ))}
      </div>

      {/* Bracket */}
      <div className="w-full h-4 border-b border-l border-r border-neutral-mid mb-6" />

      {/* Captions */}
      <div className="flex flex-col gap-1">
        {captions.map((caption, index) => (
          <p key={index} className="body-base text-neutral-dark text-center">
            {caption.label} <span className="body-base-bold">{caption.value}</span>
          </p>
        ))}
      </div>

    </div>
  );
}
