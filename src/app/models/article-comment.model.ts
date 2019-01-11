import { Profile } from './profile.model';

export interface ArticleComment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: Profile;
}