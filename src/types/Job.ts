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

export type StrapiJob = {
  id: number;
  documentId: string;
  title: string;
  salary: string;
  skills: StrapiSkill[];
  company: string;
  location: string;

  logo?: {
    url: string;
  };
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

export type StrapiJobPayload = {
  title: string;
  salary: string;
  company: string;
  location: string;
  logo?: string | number;

  skills?: StrapiSkillPayload[];
  requirements?: StrapiRequirementPayload[];
  additionalReqs?: StrapiAdditionalReqPayload[];

  level: string;
  validUntil: string;
  workLocation: string;
};
