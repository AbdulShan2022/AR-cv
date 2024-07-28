import React from 'react';

type SectionContentProps = {
  title: string;
  content: React.ReactNode;
};

export const SectionContent = ({ title, content }: SectionContentProps) => {
  return (
    <h2 className="section-title">
      {content}
      {title}
    </h2>
  );
};
