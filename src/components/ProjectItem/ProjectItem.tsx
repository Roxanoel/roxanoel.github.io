// components
import Image from "next/image";
// types
import type { Project } from "@/types/types";

export default function ProjectItem({
  title,
  description,
  technologies,
  projectUrl,
  imgUrl,
  imgAltText,
  year,
}: Project) {
  const titleAriaLabel = projectUrl ? `${title} (opens in a new tab)` : title;

  // TODO: conditionally render a link or a span based on the presence of a projectUrl
  // TODO: Proper placeholder for when there is no image
  return (
    <li className="mb-12" key={title + "_" + year.toString()}>
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 md:hover:!opacity-100 md:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none md:-inset-x-6 md:block md:group-hover:bg-item-hover/50 md:group-hover:shadow-[inset_0_1px_0_0_rgba(246, 216, 187, 0.1)] md:group-hover:drop-shadow-[0_6px_8px_rgba(243,120,5,0.25)]" />
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-foreground-secondary hover:text-accent focus-visible:text-accent  group/link text-base"
              href={projectUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={titleAriaLabel}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-lg md:-inset-x-6 md:-inset-y-4 md:block" />
              <span>
                {title}
                <span className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          {technologies && technologies.length > 0 && (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {technologies.map((technology: string) => (
                <li key={technology} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent-secondary/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    {technology}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {imgUrl ? (
          <Image
            alt={imgAltText || ""}
            src={imgUrl}
            width="200"
            height="48"
            className="rounded-lg border-2 border-foreground-secondary/10 transition group-hover:border-foreground-secondary/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            style={{ color: "transparent" }}
          />
        ) : (
          <div
            className="invisible w-[200px] h-12 sm:order-1 sm:col-span-2 sm:translate-y-1"
            aria-hidden
          />
        )}
      </div>
    </li>
  );
}
