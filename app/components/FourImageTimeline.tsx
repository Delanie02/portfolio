import Image from 'next/image';

interface TimelineImageItem {
  header: string;
  subheader: string;
  src: string;
  alt: string;
}

interface FourImageTimelineProps {
  items: [TimelineImageItem, TimelineImageItem, TimelineImageItem, TimelineImageItem];
  captions?: { label: string; value: string }[];
}

export default function FourImageTimeline({ items, captions = [] }: FourImageTimelineProps) {
  return (
    <div className="flex flex-col">

      {/* Image Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">

            {/* Header & Subheader */}
            <div className="mb-3">
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
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        ))}
      </div>

      {/* Timeline Line — spans full width */}
      <div className="w-full h-px bg-neutral-mid my-6" />

      {/* Captions — stacked vertically */}
      {captions.length > 0 && (
        <div className="flex flex-col gap-1">
          {captions.map((caption, index) => (
            <p key={index} className="body-sm text-neutral-dark">
              {caption.label} <span className="body-sm-bold">{caption.value}</span>
            </p>
          ))}
        </div>
      )}

    </div>
  );
}
