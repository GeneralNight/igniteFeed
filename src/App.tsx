
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'
import { Post as PostElement } from "./components/Post"
import {Author, Post, PostContentTypes} from '../models'

const posts: Post[] = [
  {
    id: 1,
    author: {
      name: "Guilherme Tinen Orotlani",
      avatar: "https://github.com/GeneralNight.png",
      role: "Frontend developer",
    },
    content: [
      {type: PostContentTypes.PARAGRAPH, content: 'Fala galeraa 👋'},
      {type: PostContentTypes.PARAGRAPH, content: 'Acabei de atualizar minhas skills.  🚀'},
      {type: PostContentTypes.LINK, content: '👉 Meu Linkdin', link: 'https://linkedin.com/in/guilherme-tinen-ortolani'},
      {type: PostContentTypes.HASHTAGS, content: ['novoprojeto', 'nlw', 'rocketseat']},
    ],
    publishedAt: new Date('2023-03-12 08:00:00'),
  },
  {
    id: 2,
    author: {
      name: "Maria Paula Gementi",
      avatar: "https://github.com/MariaGementi.png",
      role: "Backend Java developer",
    },
    content: [
      {type: PostContentTypes.PARAGRAPH, content: 'Fala galeraa 👋'},
      {type: PostContentTypes.PARAGRAPH, content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: PostContentTypes.LINK, content: '👉 jane.design/doctorcare', link: 'https://linkedin.com/in/guilherme-tinen-ortolani'},
      {type: PostContentTypes.HASHTAGS, content: ['novoprojeto', 'nlw', 'rocketseat']},
    ],
    publishedAt: new Date('2023-03-08 08:00:00'),
  }
]

const me: Author = {
  name: "Guilherme Tinen Ortolani",
  avatar: "https://github.com/GeneralNight.png",
  role: "Frontend web developer"
}

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar author={me}/>
        <main>
          {
            posts.map((post) => {
              return (
                <PostElement data={post} key={post.id}/>
              )
            })
          }
        </main>
      </div>
    </>
    
    
    
  )
}


