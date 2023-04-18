import styles from './styles.module.css'
import {DefaultAvatar} from '../../Default/Avatar'
import { relativeTime } from '../../../utils/formatters'
import { Author } from '../../../../models'

interface PostHeaderProps {
    author: Author;
    publishedAt: Date
}

export function PostHeader({author, publishedAt}: PostHeaderProps) {
    return (
        <header>
            <div className={styles.profile}>
                <DefaultAvatar outlined url={author.avatar}/>
                <div className={styles.info}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title={relativeTime(publishedAt, "d 'de' LLLL 'às' HH:mm'h'").formatDate} className={styles.published} dateTime={publishedAt.toISOString()}>
                {relativeTime(publishedAt).relativePublishedAt}
            </time>
        </header>
    )
}