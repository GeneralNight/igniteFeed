import styles from './styles.module.css'
import Logo from '../../assets/logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="" className={styles.logo} />
            <strong className={styles.title}>Ignite Feed</strong>
        </header>
    )
}