import Layout from "../../components/Layout";

export default function index({ data }) {
    return (
        <Layout
            title="About | mi sitio web"
            description="descripción de la pagina About"
        >
            <h1>Lista de artículos</h1>
            {
                data.map(({ id, title, body }) => (
                    <div key={id}>
                        <h3>{id} - {title}</h3>
                        <p>{body}</p>
                    </div>
                ))
            }
        </Layout>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log('data --> ', data);
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.log(error);
    }
}