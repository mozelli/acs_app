import { Author } from "./Author"
import { Category } from "./Category"
import { Tag } from "./Tag"

export type Article = {
    id: string,
    title: string,
    body: string,
    imageUrl: string[],
    category_id: Category,
    tag_id: Tag[],
    author_id: Author,
    cretedAt: Date
}