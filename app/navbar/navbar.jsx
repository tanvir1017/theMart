import { Link } from "@remix-run/react";

const Navbar = () => {
    return (
            <nav className="nav-container">
            <span className="logo">
                    <Link to=".">Logo</Link>
                </span>
            <ul className="nav-ul">
                
                <li>
                    <Link to=".">Menu</Link>
                </li>
                <li>
                    <Link to=".">About</Link>
                </li><li>
                    <Link to="/blog">Blog</Link>
                </li><li>
                    <Link to=".">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;