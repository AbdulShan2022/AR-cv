import React from 'react';
import { resumeProps } from 'src/content';
import { Section } from '../Section';
import { Send } from 'lucide-react';
import { ContactForm } from '../Form';

type RightSectionProps = {
  content: resumeProps;
};

export const RightSection = ({ content }: RightSectionProps) => {

    const { experince, education, technicalSkills } = content;
    const sectionItems = [experince, education]

  return (
    <article>
      <section>
        <h2 className="section-title  flex items-center">
          {technicalSkills.icon}
          {technicalSkills.title}
        </h2>
        <b>Languages:</b> {technicalSkills.skills.languages.join(', ')}
        <br />
        <b>Technologies:</b> {technicalSkills.skills.technologies.join(', ')}
        <br />
      </section>
      {sectionItems.map((item: any, key: any) => (
        <Section key={key} content={item} />
      ))}
      <section>
        <h2 className="section-title flex items-center">
        <Send size={20} className="mr-2" />
          {` Let's Get in Touch `}
        </h2>
        <ContactForm content={content}/>
        
      </section>
    </article>
  );
};
