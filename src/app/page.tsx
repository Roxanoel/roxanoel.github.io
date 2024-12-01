import { Gloock } from "next/font/google";
// components
import Header from "@/components/Header/Header";
import ExperienceItem from "@/components/ExperienceItem/ExperienceItem";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
// data
import experiences from "@/data/experience/experience";
import projects from "@/data/projects/projects";
// types
import type { Experience, Project } from "@/types/types";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
});

export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </section>
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <h2
              className={`${gloock.variable} font-serif text-md font-bold uppercase tracking-widest text-foreground-secondary mb-12 lg:mb-0 lg:sr-only`}
            >
              Experience
            </h2>
            <ol>
              {experiences.map((exp: Experience) => {
                return ExperienceItem(exp);
              })}
            </ol>
          </section>
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <h2
              className={`${gloock.variable} font-serif text-md font-bold uppercase tracking-widest text-foreground-secondary mb-12 lg:mb-0 lg:sr-only`}
            >
              Projects
            </h2>
            <ol>
              {projects.map((proj: Project) => {
                return ProjectItem(proj);
              })}
            </ol>
          </section>
        </main>
      </div>
    </div>
  );
}
