import Image from "next/image";

interface TwoImageGroupProps {
  images: {
    src: string;
    alt: string;
    header?: string;      // 👈 now optional
    subheader?: string;   // 👈 now optional
  }[];
  captions?: { label: string; value: string }[];
}

export default function TwoImageGroup({ images, captions }: TwoImageGroupProps) {
  return (
    <div className="flex flex-col">

      {/* Two Images Side by Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        {images.map((image, index) => (
          <div key={index} className="w-full md:w-1/2 flex flex-col">

            {/* Only renders if at least one exists */}
            {(image.header || image.subheader) && (
              <div className="mb-3">
                {image.header && (
                  <p className="body-base-bold text-neutral-dark text-center">{image.header}</p>
                )}
                {image.subheader && (
                  <p className="body-base text-neutral-dark text-center">{image.subheader}</p>
                )}
              </div>
            )}

            <div className="relative w-full aspect-[13/9] border border-neutral-mid">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bracket + Captions */}
      {captions && captions.length > 0 && (
        <>
          <div className="w-full h-4 border-b-2 border-l-2 border-r-2 border-neutral-mid mb-4" />
          <div className="flex flex-col gap-1">
            {captions.map((caption, index) => (
              <p key={index} className="body-base text-neutral-dark text-center">
                {caption.label} <span className="body-base-bold">{caption.value}</span>
              </p>
            ))}
          </div>
        </>
      )}

    </div>
  );
}
