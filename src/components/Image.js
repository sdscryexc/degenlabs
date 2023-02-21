import React from "react";


const Image = ({ className, src,  srcSet,  alt }) => {
  const darkMode = useDarkMode(false);

  return (
    <img
      className={className}
      srcSet={srcSet}
      src={src}
      alt={alt}
    />
  );
};

export default Image;
