// Section.jsx
import React from "react";

interface SectionProps {
  id: string;
  title?: string;
  extraTitle?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  extraTitle,
  subtitle,
  children,
}) => {
  return (
    <div className="mt-4">
      {title && (
        <>
          <h2 className="font-extrabold" id={id}>
            {title}
          </h2>
          <div className="h-1  rounded-lg bg-section-beige "></div>
          <div className="h-6   bg-none "></div>
        </>
      )}

      {extraTitle && (
        <>
          <h3 className="font-bold">{extraTitle}</h3>
          <div className="h-6   bg-none "></div>
        </>
      )}

      {subtitle && <h4 className="">{subtitle}</h4>}
      <div className="h-6   bg-none "></div>

      {children}
    </div>
  );
};

export default Section;
