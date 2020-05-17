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
    years: string;
    technologies: TechnologyModel[];
}

export interface TechnologyModel {
    name: Technologies;
    thumbnail?: string;
    sublist?: string[];
    hasWiki?: boolean;
}

export interface EducationModel {
    school: string;
    city: string;
    degree: string;
    hasWiki?: boolean;
}
