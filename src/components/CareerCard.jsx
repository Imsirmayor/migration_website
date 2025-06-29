import React from 'react';

function CareerCard({ imageUrl, altText, tagText, tagColor, title, titleColor, subtitle, link }) { // Removed buttonText as it's static HTML
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  const tagInlineStyles = {
    backgroundColor: tagColor,
  };

  const titleInlineStyles = {
    color: titleColor,
  };

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3"> {/* Adjusted for 4-column layout on large screens */}
      <a href={link} className="flex flex-col h-full w-full no-underline">
        <div 
          className="relative w-full aspect-video lg:aspect-portrait mb-5 bg-cover bg-center rounded-2xl overflow-hidden" 
          style={imageStyle}
        >
          {tagText && (
            <div 
              className="absolute top-4 -left-2 flex justify-center items-center min-w-24 px-4 py-3 font-extrabold text-12px text-white leading-none rounded-full" 
              style={tagInlineStyles}
            >
              {tagText}
            </div>
          )}
        </div>
        <div className="grow flex flex-col pl-3">
          <div className="flex justify-start items-center gap-4 mb-2">
            <div className="font-bold text-18px lg:text-24px leading-tight" style={titleInlineStyles}>
              {title}
            </div>
            {/* SVG Arrow - directly from your snippet */}
            <svg width="32" height="13" viewBox="0 0 32 13" fill="none">
              <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM31.5303 7.03033C31.8232 6.73744 31.8232 6.26256 31.5303 5.96967L26.7574 1.1967C26.4645 0.903806 25.9896 0.903806 25.6967 1.1967C25.4038 1.48959 25.4038 1.96447 25.6967 2.25736L29.9393 6.5L25.6967 10.7426C25.4038 11.0355 25.4038 11.5104 25.6967 11.8033C25.9896 12.0962 26.4645 12.0962 26.7574 11.8033L31.5303 7.03033ZM1 7.25H31V5.75H1V7.25Z" fill={titleColor}></path>
            </svg>
          </div>
          <div className="font-bold text-14px lg:text-16px pr-4" style={{ color: 'var(--cis-dark-blue)' }}> {/* Specific color from snippet */}
            {subtitle}
          </div>
        </div>
      </a>
    </div>
  );
}

export default CareerCard;