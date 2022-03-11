import {Card, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ArticleVotes from "./ArticleVotes";


export default function ArticleCard({ author, topic, title, created_at, article_id, comment_count, votes }) {
    let path = process.env.PUBLIC_URL;
    if (topic === "cooking") {
      return (
        <Card style={{ width: "18rem" }} key={article_id} className="box article__container">
          <Card.Img variant="top" src={path + '/assets/images/cooking.jpg'} />
          <Card.Body>
            <Card.Title className="heading-tertiary text-truncate">{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{topic}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
            <Card.Text>
              <FontAwesomeIcon className="card__icon" icon={faMessage} /> <span className="card__icon__text">{comment_count}</span>
            </Card.Text>
            <Link to={`/article/${article_id}`}><Button variant="primary" className="btn-article u-margin-bottom-small">Read article</Button></Link>
            <ArticleVotes votes={votes} article_id={article_id} />
          </Card.Body>
        </Card>
      );
    } else if (topic === "football") {
      return (
        <Card style={{ width: "18rem" }} key={article_id} className="box article__container">
          <Card.Img variant="top" src={path + '/assets/images/football.jpg'} />
          <Card.Body>
            <Card.Title className="heading-tertiary text-truncate">{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{topic}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
            <Card.Text>
              <FontAwesomeIcon className="card__icon" icon={faMessage} /> <span className="card__icon__text">{comment_count}</span>
            </Card.Text>
            <Link to={`/article/${article_id}`}><Button variant="primary" className="btn-article u-margin-bottom-small">Read article</Button></Link>
            <ArticleVotes votes={votes} article_id={article_id} />
          </Card.Body>
        </Card>
      );
    } else if (topic === "coding") {
      return (
        <Card style={{ width: "18rem" }} key={article_id} className="box article__container">
          <Card.Img variant="top" src={path + '/assets/images/coding.jpg'} />
          <Card.Body>
            <Card.Title className="heading-tertiary text-truncate">{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{topic}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
            <Card.Text>
              <FontAwesomeIcon className="card__icon" icon={faMessage} /> <span className="card__icon__text">{comment_count}</span>
            </Card.Text>
            <Link to={`/article/${article_id}`}><Button variant="primary" className="btn-article u-margin-bottom-small">Read article</Button></Link>
            <ArticleVotes votes={votes} article_id={article_id} />
          </Card.Body>
        </Card>
      );
    }
  };
