import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import "./ArticleList.css"
import Hero from "./Hero";
import Error from "./Error";

export default function ArticleTopicList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {topic_slug} = useParams();
 

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesByTopic(topic_slug).then((articleData) => {
      setArticles(Object.values(articleData));
      console.log(setArticles);
      setIsLoading(false);
      setError(null);
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
  }, [topic_slug]);



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
