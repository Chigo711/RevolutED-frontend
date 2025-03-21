import assets from "../../assets/assets"
function ContentSection() {
    return (
        <section className="bg-tertiary min-h-[90vh] w-[100%] flex justify-center gap-[3rem]">
            <div>
                <img src={assets.contImage} className="min-h-[20rem] min-w-[30rem] flex-1" />
            </div>
            <div>
                <h2 className="font-semibold text-[1.4rem]">Discover the mission, vision
                and story behind RevolutEd.</h2>
                <p className="leading-7 font-medium text-[2rem]">At RevolutEd, we are redefining education through AI-driven learning, voice recognition, and multilingual support (English, Hausa, Yoruba, and Igbo). Our goal is to break barriers, making education accessible, personalized, and community-powered for students at every level.
                We are committed to solving SDG 4 (Quality Education) by ensuring that every learner, regardless of background or location, has the tools they need to succeed.</p>
            </div>
        </section>
    )
}

export default ContentSection
