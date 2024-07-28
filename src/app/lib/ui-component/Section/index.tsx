import React from 'react';
import { contactProps } from 'src/content';

type SectionProps = {
  content: contactProps;
};

export const Section = ({ content }: SectionProps) => {
  return (
    <section>
      <h2 className="section-title flex items-center">
        {content.icon}
        {content.title}
      </h2>
      {content?.lists?.map((subItem, key) => (
        <div className="school" key={key}>
          <div className="upper-row">
            <h3 className="school-name">{subItem.place}</h3>
            {subItem.from && (
              <div className="time">
                {subItem.from} {subItem.to}
              </div>
            )}
          </div>
          <div className="school-title">{subItem.title}</div>

          {subItem.key_responsibilities && (
            <>
              <div>{subItem.overview}</div>
              <div className={'font-bold pt-1'}>
                Key responsibilities
              </div>

              <ul className='ml-5 list-outside'>
                {subItem.key_responsibilities?.map((item, key) => (
                  <li className='list-disc'  key={key}>{item}</li>
                ))}
              </ul>
              {subItem.achievements && <div className={'font-bold pt-1'}>Achievements</div>}

              <ul className='ml-5 list-outside'>
                {subItem.achievements?.map((item, key) => (
                  <li className='list-disc' key={key}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </section>
  );
};
