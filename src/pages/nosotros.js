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
        <h2 className={styles.AboutUs__h2}>Sobre ProveeMed</h2>
        <p className={styles.AboutUs__p}>En ProveeMed, estamos comprometidos con la excelencia en el desarrollo de soluciones tecnológicas que impulsen la eficiencia y la calidad en el sector de la salud. Nuestro proyecto, desarrollado con Laravel, es un testimonio de esta misión. Surgido como resultado de nuestras prácticas en la facultad, estamos emocionados de aplicar nuestro aprendizaje en un proyecto con impacto real.</p>
      
        <h2 className={styles.AboutUs__h2}>El proyecto</h2>
        <p className={styles.AboutUs__p}>
            ProveeMed es una plataforma innovadora diseñada para optimizar la gestión de proveedores en el ámbito médico. <br />
            Con un enfoque en la simplicidad y la funcionalidad, ProveeMed permite a las instituciones de salud gestionar de manera eficaz sus relaciones con los proveedores, desde la gestión de pedidos hasta la coordinación de entregas y más.
        </p>

        <h2 className={styles.AboutUs__h2}>Equipo de desarrollo</h2>
        <Cards />
      
        <h2 className={styles.AboutUs__h2}>Nuestra Pasión</h2>
        <p className={styles.AboutUs__p}>
        En ProveeMed, nos enorgullece trabajar juntos para superar desafíos y ofrecer soluciones que transforman la atención médica. Estamos comprometidos con la excelencia y dedicados a brindar un servicio excepcional a nuestros clientes y usuarios finales. <br />
Estamos desarrollando este proyecto para Pedro Pablo Escobar, profesor de la Facultad de Ingeniería de Olavarría, UNICEN, como parte de nuestro compromiso con la educación y la aplicación práctica de nuestros conocimientos.
        </p>
        
      </section>
    </Layout>
  );
}