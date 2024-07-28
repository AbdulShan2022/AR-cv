'use client';
import { useForm, ValidationError } from '@formspree/react';
import { resumeProps } from 'src/content';
import { Button } from '../Button';

interface ContactFormProps {
  content: resumeProps;
}

export const ContactForm = ({ content }: ContactFormProps) => {
  const [state, handleSubmit] = useForm('mpwapjkz');

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          required={true}
          name="name"
          className="form-control"
          placeholder={content.contact?.name}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          required={true}
          name="email"
          className="form-control"
          placeholder={content.contact?.email}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="form-group">
        <input
          type="text"
          required={true}
          name="subject"
          className="form-control"
          placeholder={content.contact?.subject}
        />
      </div>
      <div className="form-group">
        <textarea
          rows={4}
          required={true}
          name="message"
          className="form-control"
          placeholder={content.contact?.message}
        ></textarea>
      </div>
      <Button title="Submit" type={'submit'} />
      <ValidationError errors={state.errors} />
    </form>
  );
};
