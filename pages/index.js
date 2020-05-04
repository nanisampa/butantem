import Head from 'next/head'
import Layout from '../components/Layout';
import IndexHero from '../components/IndexHero';
import RandomProjects from '../components/RandomProjects';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

const Tabletop = require('tabletop');

function Home(props) {
  let { projects, categories } = props;
  return (
    <Layout>
      <Head>
        <title>MEX VS COVID-19 - Apoia empresas e projetos do Butantã afetados pelo COVID-19</title>
        <meta
          key="description"
          name="description"
          content="MEX vs COVID-19 es una plataforma para apoyar a diferentes negocios mexicanos que han sido afectados por la pandemia del COVID-19."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IndexHero categories={categories} />
        <RandomProjects projects={projects} />
        <StepsToAdd />
      </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export async function getServerSideProps() {
  const spreadSheetUrl = "https://docs.google.com/spreadsheets/d/1Fh1oUfzVeQz2_2NMetk0nCXB7d45Vuf8ZJ-e9NGVcm8/edit?usp=sharing";
  function getData() {
    return new Promise(resolve => {
      Tabletop.init({
        key: spreadSheetUrl,
        callback: data => resolve(data),
        simpleSheet: false
      });
    });
  }
  const ssData = await getData();
  return {
    props: {
      projects: ssData.proyectos.elements,
      categories: ssData.categorias.elements
    }
  };
}

export default Home
