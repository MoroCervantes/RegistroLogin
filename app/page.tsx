import Link from "next/link"
import Head from "next/head"
import styles from "@/styles/styles.module.css";
import Footer from "@/components/Footer";
import Image from "next/image";
import Counter from "@/components/Counter";


export default function Home() {
  return (
    <div className={styles.container}>
      {/*<Head>
        <title>Mi pagina web</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=divice-width, initial-scale=1, shrink-to-fit=no" />
        </Head>*/}

      {/*Navbar*/}

      <nav className={styles.navbar}>
          <Link href="#" className={styles.navbarBrand}>Home</Link>
             <ul className={styles.navbarNav}>
               <li className={styles.navItem}>
                  <Link href="/pagesAyuda/ayuda" className={styles.navLink}>
                    Ayuda
                  </Link>
               </li>
            <li className={styles.navItem}>
                 <Link href="/pageSesion/sesion" className={styles.navLink}>
                  Sesión 
                </Link>
          </li>
        </ul>
      </nav>

      {/*Contenido principal */}

      <div className={styles.content}>
      <h1>Inteligencia Artificial</h1>
      <Image src="/ia.jpg" alt="Descripción de la imagen" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} width={500} height={300}/>

      <h4 style={{ textAlign: 'justify' }}>La inteligencia artificial (IA) es un campo de la informática que busca desarrollar sistemas capaces de realizar tareas inteligentes, como el aprendizaje, la percepción y la toma de decisiones. Esto incluye áreas como el aprendizaje automático, redes neuronales artificiales, procesamiento del lenguaje natural, visión por computadora y robótica.</h4>
       
      </div>

      {/*Componentes footer*/}
      <Footer />
      
      {/*Componentes Counter*/}
      <Counter/>
    </div>
    
  )
}
