import type { Experience } from "@/types/types";

export default function ExperienceItem({
  startDate,
  endDate,
  jobTitle,
  company,
  companyUrl,
  description,
  technologies,
}: Experience) {
  // TODO: possibly some more clever stuff with dates
  const formattedDateLabel = `${startDate} — ${endDate}`;
  const formattedDateAriaLabel = `${startDate} to ${endDate}`;
  // Job title + company name and optional url indication
  const jobAriaLabel = `${jobTitle} at ${company}${
    companyUrl ? " (opens in a new tab)" : ""
  }`;
  // TODO: types for props
  return (
    <li key={company + "_" + jobTitle} className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-item-hover/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(246, 216, 187, 0.1)] lg:group-hover:drop-shadow-[0_6px_8px_rgba(243,120,5,0.25)]"></div>
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-foreground-tertiary sm:col-span-2"
          aria-label={formattedDateAriaLabel}
        >
          {formattedDateLabel}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-foreground-secondary">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-foreground-secondary hover:text-accent focus-visible:text-accent  group/link text-base"
                href={companyUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={jobAriaLabel}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {jobTitle + " · "}
                  <span className="inline-block">
                    {company}
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
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          {technologies && technologies.length > 0 && (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {technologies.map((technology: string) => (
                <li key={technology} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent-secondary/10 px-3 py-1 text-xs font-medium leading-5 text-accent ">
                    {technology}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
