import { Outlet, Link } from "react-router-dom";
import './styles/Navbar.css'

export default function Navbar(){
    return(
        <div id="navbar">
            <nav>
                <ul>
                    <li><Link className="logo" to='/'>Sendy Adriansyah</Link></li>
                    <li><Link className="nav-menu" to='/about'>About</Link></li>
                    <li><Link className="nav-menu" to='/contact'>Contact</Link></li>
                    <li><Link className="nav-menu" to='/projects'>Projects</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}