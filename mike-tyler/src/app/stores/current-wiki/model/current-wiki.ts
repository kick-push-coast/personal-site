import { Technologies } from 'src/app/enums/technologies';

export interface WikiModel {
    title: string;
    url: string;
    summary: string;
    tech: Technologies;
    image?: string;
}
