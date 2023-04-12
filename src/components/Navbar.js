import NavLink from "./Navlink";

function Navbar() {
return (
  <nav className="navbar">
    <ul>
      <NavLink text="GITHUB" link="https://github.com/Roxanoel" />
      <NavLink text="LINKEDIN" link="https://www.linkedin.com/in/roxane-noel/" />
      <NavLink text="ITCH.IO" link="https://roxanoel.itch.io/" />
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