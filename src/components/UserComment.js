import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { postComment } from "../api";
import {Modal, Form, Button} from "react-bootstrap";

export default function UserComment() {
    const [comment, setComment] = useState("");
    const { loggedInUser } = useContext(UserContext);
    const { article_id } = useParams();
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment === "") {
            setError(true);
            return;
        }
        postComment(article_id, loggedInUser.username, comment)
        .then((data) => {
          setComment((current) => {
            return [...current, data ];
          });
          setComment('');
          setError(false)
        });
    };


    if (error) return <div>
    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Error</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>You must type a comment before submitting!</p>
    </Modal.Body>

  </Modal.Dialog>
    </div>
    return (
        <Form className="text-center comment__form" onSubmit={handleSubmit}>
          <fieldset>
            <Form.Group className="mb-3 comment__form__input text-center" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Please type a new comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </fieldset>
        </Form>
    );
}
