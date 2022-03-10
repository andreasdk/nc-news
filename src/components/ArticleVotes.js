import { useState } from "react";
import { patchArticleVotes } from "../api";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function ArticleVotes({ votes, article_id }) {
  const [articleVotes, setArticleVotes] = useState(votes);

  const handleClickIncrease = () => {
    setArticleVotes((currentVotes) => (currentVotes += 1));
    patchArticleVotes(article_id, 1);
  };

  const handleClickDecrease = () => {
    setArticleVotes((currentVotes) => (currentVotes -= 1));
    patchArticleVotes(article_id, -1);
  };

  return (
    <footer className="card-footer">
        <Card.Subtitle className="mb-2 paragraph card-paragraph">
            Upvotes: {articleVotes}
        </Card.Subtitle>
        <Button className="u-margin-right-small card__icon__button" variant="primary" onClick={handleClickIncrease}>
            <FontAwesomeIcon className="card__icon article__card__icon" icon={faThumbsUp} />
        </Button>
        <Button className="card__icon__button" variant="primary" onClick={handleClickDecrease}>
            <FontAwesomeIcon className="card__icon article__card__icon" icon={faThumbsDown} />
        </Button>
    </footer>
  );
};
