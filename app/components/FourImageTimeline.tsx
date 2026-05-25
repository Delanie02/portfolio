import Image from "next/image";

interface FourImageGroupProps {
  images: {
    src: string;
    alt: string;
    header?: string;
    subheader?: string;
  }[];
  captions?: { label: string; value: string }[];
  captionGroups?: { label: string; value: string }[][];
  columns?: 2 | 4;
}

export default function FourImageGroup({
  images,
  captions,
  captionGroups,
  columns = 2,
}: FourImageGroupProps) {

  // ✅ Split layout: two halves, each with 2 images + their own bracket
  if (columns === 4 && captionGroups && captionGroups.length === 2) {
    const leftImages = images.slice(0, 2);
    const rightImages = images.slice(2, 4);

    return (
      <div className="flex flex-col md:flex-row gap-6">

        {/* Left half */}
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {leftImages.map((image, index) => (
              <div key={index} className="flex flex-col">
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
                <div className="relative w-full aspect-[9/19]">
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
          {/* Left bracket */}
          <div className="w-full h-4 border-b-2 border-l-2 border-r-2 border-neutral-mid mb-4" />
          <div className="flex flex-col gap-1">
            {captionGroups[0].map((caption, index) => (
              <p key={index} className="body-base text-neutral-dark text-center">
                {caption.label} <span className="body-base-bold">{caption.value}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Right half */}
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {rightImages.map((image, index) => (
              <div key={index} className="flex flex-col">
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
                <div className="relative w-full aspect-[9/19]">
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
          {/* Right bracket */}
          <div className="w-full h-4 border-b-2 border-l-2 border-r-2 border-neutral-mid mb-4" />
          <div className="flex flex-col gap-1">
            {captionGroups[1].map((caption, index) => (
              <p key={index} className="body-base text-neutral-dark text-center">
                {caption.label} <span className="body-base-bold">{caption.value}</span>
              </p>
            ))}
          </div>
        </div>

      </div>
    );
  }

  // ✅ Default: 2-image layout with single bracket
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        {images.map((image, index) => (
          <div key={index} className="w-full md:w-1/2 flex flex-col">
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
            <div className="relative w-full aspect-[13/9]">
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
