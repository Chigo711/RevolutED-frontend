import assets from "../../assets/assets"
function ContentSection() {
    return (
        <div>
            <div>
                <img src={assets.contImage} />
            </div>
            <div>
                <h2>Discover the mission, vision
                and story behind RevolutEd.</h2>
                <p>At RevolutEd, we are redefining education through AI-driven learning, voice recognition, and multilingual support (English, Hausa, Yoruba, and Igbo). Our goal is to break barriers, making education accessible, personalized, and community-powered for students at every level.
                We are committed to solving SDG 4 (Quality Education) by ensuring that every learner, regardless of background or location, has the tools they need to succeed.</p>
            </div>
        </div>
    )
}

export default ContentSection
