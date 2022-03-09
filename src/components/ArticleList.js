import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import "./ArticleList.css"
import Hero from "./Hero";
import Error from "./Error";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((articleData) => {
      setArticles(Object.values(articleData));
      setIsLoading(false);
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
  }, []);



  if (isLoading) return <p>Loading...</p>;
  if (error) return <Error/>;
  return (
    <div>
      <Hero/>
       <h2 className="heading-secondary u-center-text u-margin-bottom-small">Articles</h2>
       <section className="grid">
     

      {articles.map(
        ({
            author,
            topic, 
            title, 
            created_at, 
            votes, 
            article_id, 
            comment_count
        }) => {
          return (
            <ArticleCard
              key={article_id}
              article_id={article_id}
              author={author}
              topic={topic}
              title={title}
              created_at={created_at}
              votes={votes}
              comment_count={comment_count}
            />            
          );
        }
      )}
    </section>
    </div>
    
  );
}
