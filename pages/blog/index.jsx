import Layout from "../../components/Layout";

export default function index(data) {
    return (
        <Layout
            title="About | mi sitio web"
            description="descripción de la pagina About"
        >
            data.map(
                () =>  ( {prop:value} )
            )
        </Layout>
    )
}

export async function getStaticProps(params) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error);
    }
}