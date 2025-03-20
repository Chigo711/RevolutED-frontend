import Logo from "./Logo"
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="flex justify-between items-center py-[2rem] px-[6%]">
            <Logo />
            <ul className="flex gap-[1.5rem]">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/">
                    <li>About</li>
                </Link>
                <Link to="/">
                    <li>Learning Hub</li>
                </Link>
                <Link to="/">
                    <li>Start Teaching</li>
                </Link>
            </ul>
            <div>
            <select value="Eng">
                <option>Eng</option>
                <option>Spn</option>
            </select>
            <button>Sign up</button>
            <button>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
