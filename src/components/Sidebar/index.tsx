import { Author } from '../../../models';
import {DefaultAvatar} from '../Default/Avatar'
import styles from './styles.module.css'

import { PencilSimpleLine  } from "@phosphor-icons/react";

interface SidebarProps {
    author: Author
}

export function Sidebar({author} : SidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <DefaultAvatar outlined url={author.avatar}/>
                <div className={styles.info}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <footer>
                <a href="#">
                    <PencilSimpleLine  size={20} weight="bold" />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}