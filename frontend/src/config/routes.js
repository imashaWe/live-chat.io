import Home from "../view/pages/Home";
import Login from "../view/pages/auth/login";
import Register from "../view/pages/auth/register";

const routes = [
    {index: true, name: 'Home', element: <Home/>},
    {path: '/login', name: 'Login', element: <Login/>},
    {path: '/register', name: 'Register', element: <Register/>},
]
export default routes;
