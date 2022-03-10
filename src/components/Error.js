import { Link } from "react-router-dom";

export default function Error({ status, msg }) {
  let path = process.env.PUBLIC_URL;
  return (
    <main className="u-padding-top-error u-center-text">
      <h1 className="heading-primary">
        {status} {msg || "This page does not exist :("}
      </h1>
      <Link to="/"><img className="u-padding-bottom-large" alt="caveman error" src={path + '/assets/images/error.gif'}/>
      </Link>
    </main>
  );
}