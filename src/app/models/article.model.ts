import { Profile } from './profile.model';

export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: any[];
    createdAt: Date;
    updatedAt: Date;
    favorited: boolean;
    favoritesCount: number;
    author: Profile;
} 