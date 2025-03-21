import Navbar from "../../components/Navbar"
import assets from "../../assets/assets"
import Button from "../../components/Button"
function HeroSection() {
    return (
        <div className="h-[100vh] px-[6%]">
            <Navbar />

            <div className=" py-[2rem] flex flex-col items-center justify-center h-[100%]">
                <div className="flex justify-between gap-[1.5rem] text-center">
                    <img src={assets.HeroL} alt="Hero Image" className="h-[9rem] w-[9rem] transform translate-y-[50px]" />
                    <div>
                    <h2 className="text-[3rem]  text-secondary font-semibold">Bridging Educational Gaps Through
                    Accessible, Localized and Communal Learning</h2>
                    <p className="font-psize  mt-[2rem] font-light" style={{fontSize: "1.1rem"}}>Smart learning made easy—personalized answers, voice-powered help, and expert tutors in English, Hausa, Yoruba, and Igbo. Join a community built for you!</p>
                    </div>
                    <img src={assets.HeroChildren} alt="Hero Image" className="h-[5.8rem] w-[5.8rem] transform translate-y-[70px]"  />
                </div>
                {/* END OF FIRST DISPLAY */}
                <div className="w-[80%] flex justify-between items-center">
                    <img src={assets.HeroL2} alt="Hero Section Image" className="w-[6.2rem] h-[6.2rem]" />
                        <div className="flex justify-between item-center gap-[2rem]">
                            <Button style={{ border: "none", minWidth: "12rem", padding: "1rem 5%", borderRadius: "50px", color: "#12362A", backgroundColor: "#D1DC3E"}}>
                                <span>Get Started</span>
                                <div className="h-[1.2rem] w-[1.2rem] bg-secondary rounded-full">
                                <img src={assets.Arrow} alt="Hero Image" />
                                </div>
                            </Button>
                            <Button>
                                <span>Watch Intro Video</span>
                            </Button>
                        </div>
                        <img src={assets.HeroR} alt="Hero Image" className="w-[6.5rem] h-[6.5rem] " />
                    </div>
            </div>
        </div>
    )
}

export default HeroSection
