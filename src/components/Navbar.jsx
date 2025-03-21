import Logo from "./Logo"
import {Link} from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [language, setLanguage] = useState('Eng');
    return (
        <div className="flex justify-between items-center w-[100%] py-[1.5rem]  border-b-1 border-[#aaa]">
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
            <div className="flex justify-between items-center gap-[2.5rem]">
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option>Eng</option>
                <option>Igb</option>
                <option>Yor</option>
                <option>Hau</option>
            </select>
            <div>

            <button>Sign up</button>
            <button>Sign in</button>
            </div>
            </div>
        </div>
    )
}

export default Navbar
