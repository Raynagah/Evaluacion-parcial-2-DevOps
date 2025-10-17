import React from 'react';
import { Link } from "react-router-dom";

export default function Boton({ to, label }) {
  return (
    <Link className={"btn btn-primary"} to={to}>
      {label}
    </Link>
  );
}
