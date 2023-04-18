import { Author } from "../author";
import { PostContentLine } from "./postContent";

export type Post = {
    id: number,
    author: Author,
    content: PostContentLine[],
    publishedAt: Date,
}