import Logo from "./Logo"
import {Link} from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [language, setLanguage] = useState('Eng');
    return (
        <div className="flex justify-between items-center  py-[1.5rem] w-[100%] mx-auto  border-b-1 border-[#aaa]">
            <Logo />
            <ul className="flex gap-[2.5rem]">
                <Link to="/" className="text-[0.75rem] font-medium text-primary">
                    <li >Home</li>
                </Link>
                <Link to="about" className="text-[0.75rem] font-medium">
                    <li>About</li>
                </Link>
                <Link to="learning" className="font-medium text-[0.75rem]">
                    <li>Learning Hub</li>
                </Link>
                <Link to="/" className="font-medium text-[0.75rem] ">
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
