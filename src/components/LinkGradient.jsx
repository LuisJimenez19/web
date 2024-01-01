function LinkGradient({ href, text = "", className = "", ...props }) {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold dark:text-white hover:text-white rounded-md shadow-2xl group w-max font-poppins text-xs sm:text-sm mx-auto mb-2 md:mx-0 ${className}`}
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100" />
      {/* Top glass gradient */}
      <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-black dark:from-white to-transparent opacity-5 h-1/3" />
      {/* Bottom gradient */}
      <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black dark:from-white to-transparent opacity-5" />
      {/* Left gradient */}
      <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-black dark:from-white to-transparent opacity-5" />
      {/* Right gradient */}
      <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-black dark:from-white to-transparent opacity-5" />
      <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10" />
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5" />
      <span className="relative">{text}</span>
    </a>
  );
}

export { LinkGradient };
