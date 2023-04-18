import {  FormEvent, useState } from 'react'
import styles from './styles.module.css'

interface PostCommentFormProps {
    onAddComment: (newCommentText: string) => void
}

export function PostCommentForm({onAddComment}: PostCommentFormProps) {
    const [newCommentText, handleNewCommentText] = useState('')

    const sendNewComment = (e:FormEvent) => {
        e.preventDefault()

        onAddComment(newCommentText)
        handleNewCommentText('')
    }
    
    return (
        <form action="" onSubmit={sendNewComment} className={styles.newCommentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea value={newCommentText} onChange={(e)=>handleNewCommentText(e.target.value)} rows={3} placeholder='Escreva um comentário...'></textarea>
            <button type="submit" disabled={!newCommentText.length}>
                Publicar
            </button>
        </form>
    )
}