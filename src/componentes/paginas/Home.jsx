import data from "../../../data/data";
import Layout from "../plantillas/Layout";
import ListaCard from "../organismos/ListaCard";
export default function Home() {
  return (
    <Layout>
      <ListaCard descripciones={data} />
    </Layout>
  );
}
