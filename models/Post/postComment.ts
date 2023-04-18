import { Author } from "../author"
import { PostContentLine } from "./postContent"

export type PostComment = {
    author: Author,
    comment: PostContentLine[]
}