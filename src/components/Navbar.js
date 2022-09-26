import NavLink from "./Navlink";

function Navbar() {
return (
  <nav class="navbar">
    <ul>
      <NavLink text="WEB" />
      <NavLink text="GAMES" />
      <NavLink text="LINKS" />
      <NavLink text="LATIN" />
      <NavLink text="MISC" />
    </ul>
  </nav>
)
}

export default Navbar;