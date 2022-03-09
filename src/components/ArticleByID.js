import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByID } from "../api";
import "./Article.css"
import Error from "./Error";

export default function ArticleByID() {

    const [article, setArticle] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchArticleByID(article_id).then((data) => {
            setArticle(data)
            setIsLoading(false)
        })
        .catch(
            ({
              response: {
                data: { msg },
                status,
              },
            }) => {
              setError({ msg, status });
              setIsLoading(false);
            }
          );
        
    }, [article_id])


    if (isLoading) {return <p>.....loading</p>}
    if (error) return <Error/>;

    return (
        <section className="u-padding-top-lg">
            <div className="article__container">
            <div className="article__header">
                <div className="article__cover">
                    
                </div>
            </div>

            <div className="article__body">
                <div className="heading-secondary u-padding-top u-margin-bottom-small">
                    <h1>{article.title}</h1>
                </div>
                <div className="article__author">
                        <h3>Author: {article.author}</h3>
                    </div>
                <div className="article__summary">
                    <p>{article.body}</p>
                </div>
                <div className="article__tags">
                    <ul>
                        <li><a>{article.topic}</a></li>
                    </ul>
                </div>
            </div>
  
            <div className="article__footer">
                <ul>
                    <li className="published__date">{article.created_at}</li>
                </ul>
            </div>
        </div>
        </section>
        
     
    )


}
