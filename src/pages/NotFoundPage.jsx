import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div>
      The page does not exist. Go <Link to="/">home</Link>
    </div>
  );
}

export default NotFoundPage