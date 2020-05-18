import { Technologies } from 'src/app/enums/technologies';


export interface UserModel {
    name: string;
    title: string;
    city: string;
    avatar?: string;
    experience: ExperienceModel[];
    education: EducationModel[];
}

export interface ExperienceModel {
    level: string;
    technologies: TechnologyModel[];
}

export interface TechnologyModel {
    name: Technologies;
    image?: string;
    hasWiki?: boolean;
    externalUrl?: string;
}

export interface EducationModel {
    school: string;
    city: string;
    degree: string;
    image?: string;
    hasWiki?: boolean;
}
