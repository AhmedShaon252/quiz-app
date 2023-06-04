import Account from "./Account"
import Classes from "../styles/Nav.module.css"
import logo from "../assets/images/"
export default function Nav(){
    return(
        <nav className={Classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={Classes.brand}>
                        <img src={logo} alt="Learn with Shaon Logo" />
                        <h3>Learn with Shaon</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    )
}