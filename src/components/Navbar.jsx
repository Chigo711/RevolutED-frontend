import Logo from "./Logo"
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="flex justify-between items-center py-[2rem] px-[6%]">
            <Logo />
            <ul className="flex gap-[2.5rem]">
                <Link to="/" className="text-[0.75rem] font-[600] color-primary text-primary">
                    <li >Home</li>
                </Link>
                <Link to="about" className="text-[0.75rem] font-[600]">
                    <li>About</li>
                </Link>
                <Link to="/" className="font-[600]">
                    <li>Learning Hub</li>
                </Link>
                <Link to="/" className="font-[600]">
                    <li>Start Teaching</li>
                </Link>
            </ul>
            <div>
            {/* <select value="Eng">
                <option>Eng</option>
                <option>Spn</option>
            </select> */}
            <button>Sign up</button>
            <button>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
