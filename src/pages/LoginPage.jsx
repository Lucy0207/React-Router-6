import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {signin} = useAuth();
    const fromPage = location.state?.from?.pathname || "/"

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user, () => navigate(fromPage, {replace: true}))
    }
  return (
    <div>
        <h1>LoginPage</h1>
       <form onSubmit={handleSubmit}>
        <label>
            Name: <input name="username"/>
        </label>
        <button type="submit">Log in</button>
       </form>
    </div>
  )
}

export default LoginPage