import Image from 'next/image';

type ThemeColor = 'purple' | 'sand' | 'mist' | 'ocean' | 'forest';

interface ProjectMeta {
  role?: string;
  team?: string;
  reach?: string;
  timeline?: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  theme?: ThemeColor;
  imagePosition?: 'right' | 'left';
  meta?: ProjectMeta;
}

const themeColors: Record<ThemeColor, { bg: string; textDark: string; textMid: string }> = {
  purple: { bg: 'bg-purple-light', textDark: 'text-purple-dark', textMid: 'text-neutral-dark' },
  sand:   { bg: 'bg-sand-light',   textDark: 'text-neutral-dark', textMid: 'text-neutral-dark' },
  mist:   { bg: 'bg-mist-light',   textDark: 'text-neutral-dark', textMid: 'text-neutral-dark' },
  ocean:  { bg: 'bg-ocean-light',  textDark: 'text-neutral-dark', textMid: 'text-neutral-dark' },
  forest: { bg: 'bg-forest-light', textDark: 'text-neutral-dark', textMid: 'text-neutral-dark' },
};

export default function Hero({
  title,
  subtitle,
  imageUrl,
  theme = 'purple',
  imagePosition = 'right',
  meta,
}: HeroProps) {
  const { bg, textDark, textMid } = themeColors[theme];

  // When imagePosition is 'left', text appears first (top on mobile, left on desktop)
  // When imagePosition is 'right' (default), image appears first (top on mobile, right on desktop)
  const imageOrder = imagePosition === 'left' ? 'order-last sm:order-last' : 'order-first sm:order-last';
  const textOrder = imagePosition === 'left' ? 'order-first sm:order-first' : 'order-last sm:order-first';

  return (
    <div className={`${bg} w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden flex flex-col sm:flex-row sm:items-center sm:min-h-[420px] lg:min-h-[523px]`}>

    {/* Image — renders based on imagePosition prop */}
    {imageUrl && (
        <div className={`${imageOrder} relative w-full h-[260px] sm:w-1/2 sm:h-[420px] lg:h-[523px]`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain object-bottom"
          />
        </div>
      )}

      {/* Text Content — renders based on imagePosition prop */}
      <div className={`${textOrder} w-full sm:w-1/2 flex-shrink-0 flex items-center`}>
        <div className="flex flex-col gap-4 px-6 py-8 sm:px-8 lg:px-12 lg:py-12 w-full text-left sm:text-right">

          {/* Title */}
          <h2 className={`h2-bold ${textDark} text-center sm:text-right`}>
            {title}
            {subtitle && (
              <>
                <br />
                {subtitle}
              </>
            )}
          </h2>

          {/* Project Metadata — only renders if meta is passed */}
          {meta && (
            <div className="flex flex-col gap-2 mt-2 sm:ps-24">
              {meta.role && (
                <div className="flex gap-2 items-baseline justify-center sm:justify-end">
                  <span className={`h5-bold ${textDark}`}>Role:</span>
                  <span className={`h5 ${textDark}`}>{meta.role}</span>
                </div>
              )}
              {meta.team && (
                <div className="flex gap-2 items-baseline justify-center sm:justify-end">
                  <span className={`h5-bold ${textDark}`}>Team:</span>
                  <span className={`h5 ${textDark}`}>{meta.team}</span>
                </div>
              )}
              {meta.reach && (
                <div className="flex gap-2 items-baseline justify-center sm:justify-end">
                  <span className={`h5-bold ${textDark}`}>Reach:</span>
                  <span className={`h5 ${textDark}`}>{meta.reach}</span>
                </div>
              )}
              {meta.timeline && (
                <div className="flex gap-2 items-baseline justify-center sm:justify-end">
                  <span className={`h5-bold ${textDark}`}>Timeline:</span>
                  <span className={`h5 ${textDark}`}>{meta.timeline}</span>
                </div>
              )}
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
