
import { Link, Outlet } from "react-router-dom";

export default function NavBar({isLogged}) {
    return(
        <>
        <nav>
            <Link to="/" className="logo-nav">Git explorer</Link>
            <div className="link-cont">
                <Link to="/">repos</Link>
                <Link to="/users">Users</Link>
                <Link to="/search">Search</Link>
                <Link to="/auth">Profile</Link>
                {!isLogged&&<Link to="/login">Login</Link>}
            </div>
        </nav>
        <Outlet/>
        </>
    )
}