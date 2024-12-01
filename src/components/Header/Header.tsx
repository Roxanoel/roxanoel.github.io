import { FaItchIo, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Gloock } from "next/font/google";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
});

export default function Header() {
  return (
    <header
      className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24`}
    >
      <div>
        <h1
          className={`${gloock.variable} font-serif tracking-wider uppercase text-4xl font-bold text-foreground-secondary sm:text-5xl`}
        >
          Roxane Noël
        </h1>
        <h2
          className={`mt-3 text-lg font-medium tracking-tight text-foreground-secondary sm:text-xl`}
        >
          Front End Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Building systems and crafting impactful experiences.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-foreground-main/40 transition-all group-hover:w-16 group-hover:bg-foreground-secondary group-focus-visible:w-16 group-focus-visible:bg-foreground-secondary motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-foreground-tertiary group-hover:text-foreground-secondary group-focus-visible:text-foreground-secondary">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-foreground-main/40 transition-all group-hover:w-16 group-hover:bg-foreground-secondary group-focus-visible:w-16 group-focus-visible:bg-foreground-secondary motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-foreground-tertiary group-hover:text-foreground-secondary group-focus-visible:text-foreground-secondary">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-foreground-main/40 transition-all group-hover:w-16 group-hover:bg-foreground-secondary group-focus-visible:w-16 group-focus-visible:bg-foreground-secondary motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-foreground-tertiary group-hover:text-foreground-secondary group-focus-visible:text-foreground-secondary">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul
        className="ml-1 mt-8 flex items-center text-accent"
        aria-label="Social media"
      >
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-accent-secondary"
            href="https://github.com/Roxanoel"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-accent-secondary"
            href="https://www.linkedin.com/in/roxane-noel/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-accent-secondary"
            href="https://roxanoel.itch.io/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Itch.io (opens in a new tab)"
            title="Itch.io"
          >
            <span className="sr-only">Itch.io</span>
            <FaItchIo className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
}
