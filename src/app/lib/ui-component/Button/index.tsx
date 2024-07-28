'use client';
interface ButtonProps {
  title: string;
  type: "submit" | "reset" | "button" | undefined;
}

export const Button = ({ title, type }: ButtonProps) => {
  

  return (
      <button type={type} className="btn btn-cv">
        {title}
      </button>
  );
};
