/* eslint-disable react/prop-types */

function Badge({ content = "hello", className = "" }) {
  return (
    <span
      /* initial={{
        filter: "blur(5px)",
      }}
      whileInView={{
        filter: "blur(0px)",
      }}
      transition={{
        delay,
      }} */
      className={`text-sm font-bold font-poppins  px-2.5 py-0.5 rounded hover:bg-transparent select-none shadow-2xl  tracking-wide
      uppercase
      transition-all ${className}`}
    >
      {content}
    </span>
  );
}

export { Badge };
