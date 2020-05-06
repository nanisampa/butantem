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
        <title>Butantem - Apoia empresas e projetos do Butantã afetados pelo COVID-19</title>
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
  const spreadSheetUrl = "https://docs.google.com/spreadsheets/u/3/d/e/2PACX-1vRUXbn4A9aVqJLGS04A0nX-MyCembNcK_cPjAQ50iyhyItOAhwIE5kZi3r97d_xUiPhuRS77_Z32C_e/pubhtml#";
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
