import Navbar from "../../components/Navbar"
import assets from "../../assets/assets"
function HeroSection() {
    return (
        <div className="min-h-[100vh] px-[6%]">
            <Navbar />

            <div className="px-[7%] py-[2rem] flex flex-col items-center justify-center h-[100%]">
                <div className="flex justify-between gap-[1.5rem] text-center">
                    <img src={assets.HeroL} alt="Hero Image" />
                    <div>
                    <h2 className="text-[2.5rem] text-secondary font-bold">Bridging Educational Gaps Through
                    Accessible, Localized and Communal Learning</h2>
                    <p className="text-psize  mt-[2rem] font-poppins font-medium">Smart learning made easy—personalized answers, voice-powered help, and expert tutors in English, Hausa, Yoruba, and Igbo. Join a community built for you!</p>
                    </div>
                    <img src={assets.HeroChildren} alt="Hero Image" className="h-[93px] w-[93px]"  />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
