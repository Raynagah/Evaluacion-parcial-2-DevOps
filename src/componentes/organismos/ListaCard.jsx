import Card from "../moleculas/Card";
import React from 'react';
export default function ListaCard({ descripciones }) {
  return (
    <div className="row">
      {descripciones.map((descripcion) => (
        <div className="col-md-6 mb-4" key={descripcion.id}>
          <Card descripcion={descripcion} />
        </div>
      ))}
    </div>
  );
}
