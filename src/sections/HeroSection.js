import Title from "../components/Title"
import JobTitles from "../components/JobTitles"
import HeroText from "../components/HeroText"
import Button from "../components/Button"

function HeroSection() {
    return <>
    <section className="hero-section">
              <Title />
              <JobTitles />
              <HeroText />
              {/*<Button customClass="contact-button">
                  <a href="mailto:roxane.noel92@gmail.com">Get in touch</a>
</Button> */}
            </section>
            <aside className="portrait"></aside>
    </>
}

export default HeroSection