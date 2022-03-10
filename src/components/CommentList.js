import { useState, useEffect } from "react";
import { fetchComments } from "../api";
import CommentCard from "./CommentCard";
import "./ArticleList.css"
import Error from "./Error";
import { useParams } from "react-router-dom";

export default function ArticleList() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
 

  useEffect(() => {
    setIsLoading(true);
    fetchComments(article_id)
    .then((commentData) => {
      setComments(Object.values(commentData));
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
  }, [article_id]);



  if (isLoading) return <p>Loading...</p>;
  if (error) return <Error/>;
  return (
    <div>
       <h2 className="heading-secondary u-center-text u-margin-bottom-small">Comments</h2>
       <section className="grid">
      {comments.map(
        ({
            author,
            body, 
            created_at, 
            votes, 
            comment_id, 
        }) => {
          return (
            <CommentCard
              key={comment_id}
              comment_id={comment_id}
              author={author}
              body={body}
              created_at={created_at}
              votes={votes}
            />            
          );
        }
      )}
    </section>
    </div>
    
  );
}
