import Layout from '../components/Layout'
import Image from 'next/image'
import styles from  "../styles/Nosotros.module.css"

const Nosotros = () => {
    return (
        <Layout
        pagina="Nosotros"
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.contenido}>
                    <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="imagen nosotros" />

                    <div>
                        <p>Phasellus convallis ligula et metus facilisis rhoncus sed a justo. Duis volutpat ipsum nisl. Aliquam purus nibh, commodo ut turpis et, lacinia molestie massa. Morbi at metus purus. Quisque vehicula tempor enim at maximus. Nullam urna urna, sollicitudin sit amet auctor sed, tempor ac risus. Praesent magna ante, accumsan euismod ante vel, ultrices rutrum leo. Praesent elementum porta dolor, et fringilla odio auctor id. Cras tincidunt massa a mollis eleifend. Pellentesque vestibulum, mauris sit amet blandit mattis, libero dui congue justo, ac porta velit leo et felis. Duis a purus mattis, luctus quam nec, accumsan turpis. Vivamus a tincidunt lorem.</p>
                        <p>Phasellus convallis ligula et metus facilisis rhoncus sed a justo. Duis volutpat ipsum nisl. Aliquam purus nibh, commodo ut turpis et, lacinia molestie massa. Morbi at metus purus. Quisque vehicula tempor enim at maximus. Nullam urna urna, sollicitudin sit amet auctor sed, tempor ac risus. Praesent magna ante, accumsan euismod ante vel, ultrices rutrum leo. Praesent elementum porta dolor, et fringilla odio auctor id. Cras tincidunt massa a mollis eleifend. Pellentesque vestibulum, mauris sit amet blandit mattis, libero dui congue justo, ac porta velit leo et felis. Duis a purus mattis, luctus quam nec, accumsan turpis. Vivamus a tincidunt lorem. Sed consequat, risus ac condimentum scelerisque, sapien velit imperdiet mauris, in fermentum nunc lacus ut metus. In egestas pellentesque libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
