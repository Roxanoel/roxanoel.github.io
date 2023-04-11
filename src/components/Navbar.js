import NavLink from "./Navlink";

function Navbar() {
return (
  <nav className="navbar">
    <ul>
      <NavLink text="GITHUB" />
      <NavLink text="ITCH.IO" />
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