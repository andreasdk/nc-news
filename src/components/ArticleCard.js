import {Card, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons';


export default function ArticleCard({ author, topic, title, created_at, article_id, comment_count }) {
    return (
        <Card style={{ width: "18rem" }} key={article_id} className="box article__container">
          
        <Card.Body>
          <Card.Title className="heading-tertiary text-truncate">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{topic}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          <Card.Text>
          <FontAwesomeIcon className="card__icon" icon={faMessage} /> <span className="card__icon__text">{comment_count}</span>
          </Card.Text>
          <Button variant="primary" href={`/article/${article_id}`} className="btn-article">Read article</Button>
        </Card.Body>
      </Card>
        
    );
}