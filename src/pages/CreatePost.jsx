import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();
  return (
    <div>
        <h1>Create Post</h1>
        <button onClick={() => signout(() => navigate("/", {replace: true}) )}>Sign out</button>
    </div>
  )
}

export default CreatePost