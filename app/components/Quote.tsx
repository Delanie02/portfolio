type ThemeColor = 'purple' | 'sand' | 'mist' | 'ocean' | 'forest';

interface QuoteProps {
  text: string;
  theme?: ThemeColor;
}

const themeTextColors: Record<ThemeColor, string> = {
  purple: 'text-purple-dark',
  sand: 'text-sand-dark',
  mist: 'text-mist-dark',
  ocean: 'text-ocean-dark',
  forest: 'text-forest-dark',
};

export default function Quote({
  text,
  theme = 'purple',
}: QuoteProps) {
  const textColor = themeTextColors[theme];

  // Parse the text to find sections marked for bold with **text**
  const parts = text.split(/\*\*(.*?)\*\*/);

  return (
    <div className="w-full px-4">
      <div className={`h5 sm:h4 ${textColor} text-center leading-relaxed`}>
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            // Bold text (marked with **)
            return (
              <span key={index} className="h5-bold sm:h4-bold">
                {part}
              </span>
            );
          }
          // Regular text
          return <span key={index}>{part}</span>;
        })}
      </div>
    </div>
  );
}
