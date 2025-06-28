"use client";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full
        mx-auto
        px-[25px]
        xs:w-[360px]
        min-[768px]:w-[768px]
        min-[1280px]:w-[1280px]
        min-[1280px]:px-[40px]
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default Container;
