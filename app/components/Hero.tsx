import Image from 'next/image';

type ThemeColor = 'purple' | 'sand' | 'mist' | 'ocean' | 'forest';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  theme?: ThemeColor;
  imagePosition?: 'right' | 'left';
}

const themeColors: Record<ThemeColor, string> = {
  purple: 'bg-purple-light',
  sand: 'bg-sand-light',
  mist: 'bg-mist-light',
  ocean: 'bg-ocean-light',
  forest: 'bg-forest-light',
};

export default function Hero({
  title,
  subtitle,
  imageUrl,
  theme = 'purple',
  imagePosition = 'right',
}: HeroProps) {
  const bgColor = themeColors[theme];

  return (
<div className={`${bgColor} w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden flex flex-col sm:flex-row sm:items-center sm:min-h-[420px] lg:min-h-[523px]`}>

  {/* Text Content */}
  <div className="w-full sm:w-1/2 flex-shrink-0 flex items-center">
    <div className="flex flex-col gap-4 px-6 py-8 sm:px-8 lg:px-12 lg:py-12 w-full text-center sm:text-right">
      <h2 className="h2-bold text-purple-dark">
        {title}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </h2>
    </div>
  </div>

  {/* Image */}
  <div className="relative w-full h-[300px] sm:w-1/2 sm:h-[420px] lg:h-[523px]">
    <Image
      src={imageUrl}
      alt={title}
      fill
      className="object-contain object-bottom"
    />
  </div>

</div>


    // <div className={`${bgColor} w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden min-h-[360px] md:min-h-[420px] lg:min-h-[523px] flex items-center`}>
    //   {/* Text Content - Left side, constrained width, vertically centered */}
    //   <div className="w-1/2 flex-shrink-0">
    //     <div className="flex flex-col gap-4 px-6 py-12 md:px-8 md:py-8 lg:px-12 lg:py-12 text-right">
    //       <h2 className="h2-bold text-purple-dark">
    //         {title}
    //         {subtitle && (
    //           <>
    //             <br />
    //             {subtitle}
    //           </>
    //         )}
    //       </h2>
    //     </div>
    //   </div>

    //   {/* Image Right - Extends to edge, flush to bottom */}
    //   <div className="relative w-1/2 h-[523px] hidden lg:flex items-end max-h-[523px]">
    //     <Image
    //       src={imageUrl}
    //       alt={title}
    //       fill
    //       className="object-cover object-bottom"
    //     />
    //   </div>
    // </div>
  );
}
