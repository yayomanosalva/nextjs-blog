import Link from "next/link"
import Image from "next/image"
import Layout from "../../components/Layout";

export default function miprimerPost() {
    return (
        <Layout
            title="About | mi sitio web"
            description="descripción de la pagina About"
        >
            <h1>Mi primer post</h1>

            <Image
                src="/img/1.jpg"
                width={600}
                height={600}
                alt="Imagen de muestra"
            >

            </Image>
            <Link href="/">
                <a>enlace al inicio</a>
            </Link>
        </Layout>
    )
}
