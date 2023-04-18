export enum PostContentTypes {
    PARAGRAPH = 'PARAGRAPH',
    LINK = 'LINK',
    HASHTAGS = 'HASHTAGS'    
}

export type PostContentLine = {
    type: PostContentTypes, 
    content: string | string[],
    link?: string,
}