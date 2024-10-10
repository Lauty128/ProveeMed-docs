import React from 'react';
import Layout from '@theme/Layout';

//----> Styles and assets
import styles from './index.module.css';
import team_data from '../team.json';

function Cards(){
    return team_data.map((person)=>{
        return <div className={styles.DeveloperCard}>
            <img src={person.github + ".png"} className={styles.DeveloperCard__image} />
            <div className={styles.DeveloperCard__information}>
                <span>{ person.role }</span>
                <h3>{ person.name }</h3>
                <p>{ person.description }</p>
                <div className={styles.DeveloperCard__buttons}>
                    <a href={person.github} className={styles.DeveloperCard__button}>
                        <svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        Github
                    </a>
                    {
                        person.linkedin &&
                        <a href={person.linkedin} className={`${styles.DeveloperCard__button} ${styles["DeveloperCard__button--linkedin"]}`}>
                            <svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFF"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="#FFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke="#FFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="#FFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="#FFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            Linkedin
                        </a>
                    }
                </div>
            </div>
        </div>
    })
}

export default function Nosotros() {
  return (
    <Layout title="Nosotros" description="Sobre nosotros">
      <section className={styles.AboutUs}>
        <h2 className={styles.AboutUs__h2}>Sobre PEMS</h2>
        <p className={styles.AboutUs__p}>
            PEMS es una plataforma diseñada para facilitar la gestión y consulta de proveedores y equipos médicos en Argentina. Permite a los proveedores actualizar su información y catálogos, mientras que las instituciones médicas pueden buscar y filtrar equipos por provincia, categoría, y otros criterios. 
            <br/>
            Con un enfoque en la usabilidad y la eficiencia, PEMS centraliza información relevante para mejorar la conectividad entre proveedores y compradores, promoviendo el acceso rápido y confiable a productos y servicios médicos.
        </p>

        <h2 className={styles.AboutUs__h2}>Equipo de desarrollo</h2>
        <p className={styles.AboutUs__p}>
            El equipo de desarrollo de PEMS se formó gracias a la visión de una persona involucrada en el ámbito de la salud, quien nos ofreció la oportunidad de embarcarnos en este desafío. Aunque al inicio no teníamos experiencia con equipos médicos, aceptamos el reto y, durante más de un año, hemos atravesado múltiples aprendizajes. Nos encontramos al principio de este camino, con muchos obstáculos superados y otros tantos por delante, pero seguimos avanzando con el entusiasmo de saber que este proyecto recién comienza y tiene mucho por crecer.
        </p>
        
        <small>
            ✨ <i>Imagenes extraidas de Github</i>
        </small>

        <Cards />
      
        <h2 className={styles.AboutUs__h2}>Nuestra Pasión</h2>
        <p className={styles.AboutUs__p}>
            Nuestra pasión por la tecnología y el impacto que puede tener en la sociedad es lo que impulsa cada paso que damos en el desarrollo de PEMS. Lo que comenzó como un proyecto entre amigos ha crecido en una oportunidad real para contribuir al ámbito de la salud en Argentina. Creemos firmemente que nuestra plataforma puede marcar una diferencia al facilitar el acceso a información clave sobre proveedores y equipos médicos, optimizando los procesos y mejorando la conectividad en el sector. 
            <br />
            <br />
            A través de la colaboración y el esfuerzo continuo, buscamos ofrecer soluciones que ayuden a las instituciones y a los profesionales de la salud a tomar decisiones más informadas, generando un impacto positivo y duradero en la sociedad.
        </p>
        
      </section>
    </Layout>
  );
}