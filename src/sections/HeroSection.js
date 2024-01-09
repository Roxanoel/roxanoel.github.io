import Title from "../components/Title"
import JobTitles from "../components/JobTitles"
import HeroText from "../components/HeroText"
import LinkButton from "../components/LinkButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faItchIo } from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
    return <>
    <section className="hero-section">
              <Title />
              <JobTitles />
              <HeroText />
              <div class="link-buttons-container">
                <LinkButton text="GITHUB" link="https://github.com/Roxanoel">
                    <FontAwesomeIcon icon={faGithub} />
                </LinkButton>
                <LinkButton text="LINKEDIN" link="https://www.linkedin.com/in/roxane-noel/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </LinkButton>
                <LinkButton text="ITCH.IO" link="https://roxanoel.itch.io/">
                    <FontAwesomeIcon icon={faItchIo} />
                </LinkButton>
              </div>
              {/*<Button customClass="contact-button">
                  <a href="mailto:roxane.noel92@gmail.com">Get in touch</a>
</Button> */}
            </section>
            <aside className="portrait"></aside>
    </>
}

export default HeroSection