import { DefaultAvatar } from '../../Default/Avatar'
import { Trash, ThumbsUp  } from "@phosphor-icons/react";
import styles from './styles.module.css'
import { useState } from 'react';
import { PostComment as PostCommentType, PostContentTypes } from '../../../../models';

interface PostCommentProps {
    comment: PostCommentType;
    onDeleteComment: (commentToDelete: PostCommentType) =>  void
}

export function PostComment({comment, onDeleteComment} : PostCommentProps) {
    const [likeCount, setLikeCount] = useState(0)
    const deleteComment = () => {
        onDeleteComment(comment)
    }
    return (
        <div className={styles.comment}>
            <DefaultAvatar url={comment.author.avatar}/>
            <div className={styles.content}>
                <div>
                    <header>
                        <div className={styles.info}>
                            <strong>{comment.author.name} <span>(você)</span></strong>
                            <time dateTime='2023-16-04 11:49:00'>Cerca de 2h</time>
                        </div>
                        <button title='Deletar comentário' onClick={deleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>        
                    <div>
                        {
                            comment.comment.map((line) => {
                                if(line.type===PostContentTypes.PARAGRAPH) {
                                    return <p key={`line-${line.content}`}>{line.content}</p>
                                } else if (line.type===PostContentTypes.LINK) {
                                    return <p key={`line-${line.content}`}><a href={line.link} target='_blank'>{line.content}</a></p>
                                } else if (line.type===PostContentTypes.HASHTAGS) {
                                    return <p key={`line-${line.content}`}>
                                        {   
                                            Array.isArray(line.content) && line.content.map((hashtag:string) => {
                                                return <a href="#" target='_blank' key={`line-${line.content}-hashtag-${hashtag}`}>#{hashtag} </a>
                                            })
                                        }
                                    </p>
                                }
                            })
                        }
                    </div>
                </div>
                <footer>
                    <button title='Aplaudir' onClick={() => {setLikeCount(likeCount + 1)}}>
                        <ThumbsUp size={20} />
                        Aplaudir • {likeCount}
                    </button>
                </footer>                
            </div>
        </div>
    )
}