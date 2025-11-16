export interface Job {
  companyLogo: string;
  title: string;
  companyName: string;
  categories: string[];
  level: "Junior" | "Mid" | "Senior";
  location: string;
  validUntil: string;
}

export interface JobRequirementsProps {
  requirements: string[];
  additionalReqs: string[];
}

export type IDetails = string[];

export type ISteps = string[];

export interface Jobs {
  title: string;
  salary: string;
  skills: string[];
  company: string;
  logo: string;
  location: string;
}
