export type Experience = {
  startDate: string;
  endDate: string;
  jobTitle: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies?: Array<string>; // TODO: add technology type for acceptable values so that I can add icons etc. in due time
};

export type Project = {
  title: string;
  description: string;
  technologies?: Array<string>;
  projectUrl?: string;
  imgUrl?: string;
  imgAltText?: string;
  year: number;
};
