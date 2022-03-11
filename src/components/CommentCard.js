import {Card} from "react-bootstrap";

export default function CommentCard({ author, body, created_at, votes }) {
    return (
    <Card className="box" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Posted by: {author}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">On {created_at}</Card.Subtitle>
            <Card.Text>
                {body}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}
    
