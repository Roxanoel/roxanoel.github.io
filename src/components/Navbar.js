import NavLink from "./Navlink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import LogoSvg from "./LogoSvg";

function Navbar() {
return (
  <nav className="navbar">
    <ul>
      <LogoSvg width={32} height={32} />
      {/*<NavLink text="GITHUB" link="https://github.com/Roxanoel">
       <FontAwesomeIcon icon={faGithub} />
      </NavLink>
      <NavLink text="LINKEDIN" link="https://www.linkedin.com/in/roxane-noel/"> 
        <FontAwesomeIcon icon={faLinkedin} />
      </NavLink>
      <NavLink text="ITCH.IO" link="https://roxanoel.itch.io/"> 
        <FontAwesomeIcon icon={faItchIo} />
</NavLink>*/}
      <NavLink text="PROJECTS">
        <FontAwesomeIcon icon={faLaptopCode} />
      </NavLink>
      {/*<NavLink text="WEB" />
      <NavLink text="GAMES" />
      <NavLink text="LINKS" />
      <NavLink text="LATIN" />
      <NavLink text="MISC" /> */}
    </ul>
  </nav>
)
}

export default Navbar;