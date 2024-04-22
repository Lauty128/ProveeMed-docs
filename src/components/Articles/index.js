import articles from '../../articles.json';
import style from './index.module.css'

function ArticleCard(props){

    const { article } = props;

    return (
        <a href={article.url} className={style.articles__card}>
            <img src={article.image} />
            <div>
                <h3>{ article.title }</h3>
            </div>
        </a>
    )
}

export default function Articles(){
    return(
        <section className={style.articles}>
            {
                articles.map((article, index) =>{
                    return <ArticleCard key={index} article={article} />
                })
            }
        </section>
    )
}