import Navbar from "../../components/Navbar"
import assets from "../../assets/assets"
function HeroSection() {
    return (
        <div className="bg-[#D1DC3E]">
            <Navbar />
            <div>
                <div>
                    {/* <img src={assets.HeroL} alt="Hero Image" /> */}
                    <div>
                    <h2>Bridging Educational Gaps Through
                    Accessible, Localized and Communal Learning</h2>
                    <p>Smart learning made easy—personalized answers, voice-powered help, and expert tutors in English, Hausa, Yoruba, and Igbo. Join a community built for you!</p>
                    </div>
                    <img src={assets.HeroChildren} alt="Hero Image" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
