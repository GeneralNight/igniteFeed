import { PostContentLine, PostContentTypes } from '../../../../models'
import styles from './styles.module.css'

interface PostContentProps {
    content: PostContentLine[]
}

export function PostContent({content} : PostContentProps) {
    return (
        <div className={styles.content}>
            {
                content.map((line) => {
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
    )
}