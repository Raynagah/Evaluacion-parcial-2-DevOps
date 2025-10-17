import React from 'react';

export default function Imagen({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="img-avatar rounded-circle"
      style={{ width: "200px", heigth: "300px" }}
    />
  );
}
