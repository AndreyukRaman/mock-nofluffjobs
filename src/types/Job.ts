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

export type StrapiSkill = {
  id: number;
  name: string;
};

export type StrapiSkillPayload = {
  name: string;
};

export type StrapiRequirementPayload = {
  requirement: string;
};

export type StrapiAdditionalReqPayload = {
  additionalReq: string;
};

export type StrapiJobListItem = {
  id: number;
  title: string;
  salary: string;
  company: string;
  location: string;
  skills: StrapiSkillPayload[];
  logo?: {
    url: string | null;
  };
};

export type StrapiJobSingle = {
  id: number;
  title: string;
  salary: string;
  company: string;
  location: string;

  level: string;
  validUntil: string;
  workLocation: string;

  skills: StrapiSkillPayload[];
  requirements: StrapiRequirementPayload[];
  additionalReqs: StrapiAdditionalReqPayload[];

  logo?: {
    url: string | null;
  };
};
