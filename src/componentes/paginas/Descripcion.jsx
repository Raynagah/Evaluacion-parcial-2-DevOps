import { useParams } from "react-router-dom";
import data from "../../../data/data";
import Layout from "../plantillas/Layout";
import Imagen from "../atomos/Imagen";
import Texto from "../atomos/Texto";
import Boton from "../atomos/Boton";
export default function Descripcion() {
  const { id } = useParams();
  const descripcion = data.find((des) => des.id == parseInt(id));
  return (
    <Layout>
      <div className="d-flex flex-column align-items-center text-center">
        <Imagen src={descripcion.foto} alt={descripcion.nombre} />
        <h1>{descripcion.nombre} </h1>
        <Texto texto={descripcion.descripcion} />
        <Boton to={"/"} label={"Volver"} />
      </div>
    </Layout>
  );
}
