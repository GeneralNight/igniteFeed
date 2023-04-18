import { useState } from 'react'
import { PostComment as PostCommentElement } from './Comment'
import { PostCommentForm } from './Comment/Form'
import { PostContent as  PostContentElement} from './Content'
import { PostHeader } from './Header'
import styles from './styles.module.css'

interface PostProps {
    data: PostType
}

import {Post as PostType, PostComment, PostContentTypes} from '../../../models'

export function Post({data} : PostProps) {
    
    const [comments, setComments] = useState<PostComment[]>([])

    const handleNewComment = (newCommentText: string) => {
        const newComment: PostComment = {
            author: {
                name: 'Guilherme Tinen Ortolani',
                avatar: "https://github.com/GeneralNight.png",
                role: "Frontend web developer"
            },
            comment: [
                {type: PostContentTypes.PARAGRAPH, content: newCommentText}
            ]
        }
        setComments([...comments, newComment])
    }

    const deleteComment = (commentToDelete: PostComment) => {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
        setComments(commentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <PostHeader author={data.author} publishedAt={data.publishedAt}/>
            <PostContentElement content={data.content}/>
            <PostCommentForm onAddComment={(newCommentText)=>handleNewComment(newCommentText)}/>
            {
                comments.map((comment) => {
                    return (
                        <PostCommentElement comment={comment} key={comment.comment.map(c=>c.content).join("-")} onDeleteComment={(comment: PostComment)=>deleteComment(comment)}/>
                    )
                })
            }
        </article>
    )
}