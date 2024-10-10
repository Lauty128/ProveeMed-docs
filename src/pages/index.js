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
          <h1>Información precisa, para decisiones médicas seguras.</h1>
          <p>
            Sistema de gestión de información para proveedores y equipos médicos en Argentina. La plataforma permite centralizar y organizar datos relacionados con productos y servicios del sector, facilitando el acceso a información actualizada de manera eficiente y confiable.
          </p>
          <div>
            <Link className={`${styles.header__button} ${styles['header__button--main']}`} href='/docs/introduccion'>📄 Documentación</Link>
            <Link className={styles.header__button} href='/instalacion'>💻 Instalar entorno de desarrollo</Link>
          </div>
        </div>
        <div className={styles.header__github}>
          <span>👉 Accede al codigo fuente</span>
          <Link href='https://github.com/Lauty128/PEMS' className={styles.header__githubButton}>
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
