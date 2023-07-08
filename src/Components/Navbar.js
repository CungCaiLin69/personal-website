import { Outlet, NavLink } from "react-router-dom";
import './styles/Navbar.css'

export default function Navbar(){
    return(
        <div id="navbar">
            <nav>
                <ul>
                    <li><NavLink className="logo" to='/'>Sendy Adriansyah</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "nav-underline" : "nav-menu")} to='/about'>About</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "nav-underline" : "nav-menu")} to='/contact'>Contact</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? "nav-underline" : "nav-menu")} to='/projects'>Projects</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}