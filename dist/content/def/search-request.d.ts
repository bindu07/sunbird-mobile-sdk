import { ContentSortCriteria } from './requests';
export interface SearchRequest {
    filters: SearchFilter;
    fields?: string[];
    query?: string;
    offset?: number;
    limit?: number;
    mode?: string;
    exists?: string[];
    facets?: string[];
    sort_by?: ContentSortCriteria[];
}
export interface SearchFilter {
    compatibilityLevel?: {
        [key: string]: any;
    };
    identifier?: string[];
    status?: string[];
    objectType?: string[];
    contentType?: string[];
    keywords?: string[];
    dialcodes?: string[];
    createdBy?: string[];
    gradeLevel?: string[];
    medium?: string[];
    board?: string[];
    language?: string[];
    topic?: string[];
    purpose?: string[];
    channel?: string[];
    audience?: string[];
}
