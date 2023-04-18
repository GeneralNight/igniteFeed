import styles from './styles.module.css'

interface DefaultAvatarProps {
    url: string;
    outlined?: boolean;
}

export function DefaultAvatar({outlined=false, url} : DefaultAvatarProps) {
    return (
        <div className={outlined ? styles.avatarOutline : styles.avatar}>
            <img src={url}  />
        </div>
    )
}