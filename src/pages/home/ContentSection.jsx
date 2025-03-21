import assets from "../../assets/assets"
function ContentSection() {
    return (
        <section className="bg-tertiary min-h-[90vh] w-[100%] px-[2rem] flex justify-center gap-[3rem]">
            <div className="max-w-[30rem] max-h-[20rem]">
                <img src={assets.contImage} className="h-[100%] w-[100%] flex-1" />
            </div>
            <div className="flex flex-col gap-[1rem] flex-1 w-[50%]">
                <h2 className="font-semibold text-[1.4rem]">Discover the mission, vision
                and story behind RevolutEd.</h2>
                <p className="leading-7 font-medium text-[0.85rem] text-[#777]">At RevolutEd, we are redefining education through AI-driven learning, voice recognition, and multilingual support (English, Hausa, Yoruba, and Igbo). Our goal is to break barriers, making education accessible, personalized, and community-powered for students at every level.
                </p>
                <p className="leading-7 font-medium text-[0.85rem] text-[#777] ">We are committed to solving SDG 4 (Quality Education) by ensuring that every learner, regardless of background or location, has the tools they need to succeed.</p>
            </div>
        </section>
    )
}

export default ContentSection
