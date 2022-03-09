import { useState, useEffect } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import "./ArticleList.css"
import Hero from "./Hero";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    fetchArticles().then((articleData) => {
      setArticles(Object.values(articleData));
      setIsLoading(false);
    });
  }, []);



  if (isLoading) return <p>Loading...</p>;
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
