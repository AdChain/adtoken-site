"use client";

const Button = ({
  label,
  className,
  href,
}: {
  label: string;
  className?: string;
  href: string;
}) => {
  return (
    <button
      className={`${className} hover:scale-105  px-8 py-2 w-full rounded-md h-10 relative bg-white text-white text-sm hover:shadow-2xl hover:shadow-white/[1.5] transition duration-200 border border-slate-600`}
    >
      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
      <span className="relative w-full flex justify-center h-full z-20 text-black text-center">
        {label}
      </span>
    </button>
  );
};

export default Button;
