import Head from 'next/head'
import Layout from '../components/Layout';
import AdvisorsList from '../components/AdvisorsList';
import StepsToAdd from '../components/StepsToAdd';
import Footer from '../components/Footer'

const Tabletop = require('tabletop');

function Events(props) {
    let { asesorias } = props;
    return (
        <Layout>
            <Head>
                <title>Butantem - Especialistas para ajuda nos temas relacionados  COVID-19</title>
                <meta
                    key="description"
                    name="description"
                    content="MEX vs COVID-19 es una plataforma para apoyar a diferentes negocios mexicanos que han sido afectados por la pandemia del COVID-19. En nuestra sección de eventos encuanetra asesoría legal, de negocis y más para ayudaarte durante la pandemia."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-covid-100">
                <div className="container mx-auto ">
                    <div>
                        <h2 className="text-2xl lg:text-3xl text-gray-900 leading-normal p-2 lg:p-10 text-center font-serif">Consultoria Especializada</h2>
                        <p className="text-md font-serif px-4 pb-4 text-gray-800 text-center">Contamos com um grupo de especialistas de diferentes áreas para falar sobre a COVID-19.</p>
                    </div>
                    <AdvisorsList advisories={asesorias} />
                </div>
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
            asesorias: ssData.asesorias.elements
        }
    };
}

export default Events
