/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { resumeProps } from 'src/content';
import { Mail, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../../../../img/avatar.jpg';
import { Button } from '../Button';
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type LeftSectionProps = {
  content: resumeProps;
};

export const LeftSection = ({ content }: LeftSectionProps) => {
  return (
    <header>
      <div className="profile">
        <div className="picture">
          <img src={profilePhoto.src} alt="Abdul Rahman" />
        </div>
        <a href={'/resume.pdf'} download="Abdul Rahman Resume.pdf">
        <Button title={'Download Resume'} type={'button'}/>
        </a>
        <h1>{content.name}</h1>
        <span>{content.title}</span>
      </div>
      <ul className="social mb-2">
        <li className="flex items-center">
          <Mail size={16} className=" textColor mr-1.5 pb-[2px]" />
          <span id="email">
            <a href="#">{content.email.address}</a>
          </span>
        </li>
        <li className="flex items-center">
          <Github size={16} className=" textColor mr-1.5 pb-[2px]" />
          <a href={content.github.url}>{content.name}</a>
        </li>
        <li className="flex items-center">
          <Linkedin size={16} className=" textColor mr-1.5 pb-[2px]" />
          <a href={content.linkedin.url}>{content.name}</a>
        </li>
      </ul>

      <p>{content.summary}</p>
    </header>
  );
};
