import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <header className={styles.header}>
        <div className={styles.header__presentation}>
          <h1>Centralizando esfuerzos, maximizando resultados.</h1>
          <p>
            Sistema integral diseñado para revolucionar la manera en que los usuarios acceden a información sobre proveedores de equipos médicos en Argentina. 
            <br />
            ProveeMed permite a los usuarios explorar y acceder a un amplio catálogo de proveedores y sus respectivos productos médicos.
          </p>
          <div>
            <Link className={`${styles.header__button} ${styles['header__button--main']}`} href='/docs/introduccion'>📄 Documentación</Link>
            <Link className={styles.header__button} href='/instalacion'>💻 Instalar entorno de desarrollo</Link>
          </div>
        </div>
        <div className={styles.header__github}>
          <span>👉 Accede al codigo fuente</span>
          <Link href='https://github.com/Lauty128/ProveeMed-laravel' className={styles.header__githubButton}>
            ⌨ Codigo fuente
          </Link>
        </div>
      </header>
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
