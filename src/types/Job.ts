//for Read data

export type IDetails = string[];

export type ISteps = string[];

export type StrapiSkill = {
  id: number;
  name: string;
};

export type StrapiRequirement = {
  id: number;
  requirement: string;
};

export type StrapiAdditionalReq = {
  id: number;
  additionalReq: string;
};

export type StrapiJobListItem = {
  id: number;
  title: string;
  salary: string;
  company: string;
  location: string;
  skills: StrapiSkill[];
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

  skills: StrapiSkill[];
  requirements: StrapiRequirement[];
  additionalReqs: StrapiAdditionalReq[];

  logo?: {
    url: string | null;
  };
};

// for Create DTO
export type CreateSkillDto = {
  name: string;
};

export type CreateRequirementDto = {
  requirement: string;
};

export type CreateAdditionalReqDto = {
  additionalReq: string;
};

export type CreateJobDto = {
  title: string;
  salary: string;
  company: string;
  location: string;
  level: string;
  validUntil: string;
  workLocation: string;

  skills: CreateSkillDto[];
  requirements: CreateRequirementDto[];
  additionalReqs: CreateAdditionalReqDto[];
};
