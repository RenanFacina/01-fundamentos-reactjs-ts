import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/RenanFacina.png',
            name: 'Renan Facina',
            role: 'Developer'
        },
        content: [
            { type: 'paragraph', content: 'Lorem ipsum dolor sit amet.'},
            { type: 'paragraph', content: 'Lorem, ipsum dolor sit consectetur adipisicing elit. Hic, quas.'},
            { type: 'link', content: 'jane/design/doctorcare'}
        ],
        publishedAt: new Date('2024-04-27 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: '@Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Lorem ipsum dolor sit amet.'},
            { type: 'paragraph', content: 'Lorem, ipsum dolor sit consectetur adipisicing elit. Hic, quas.'},
            { type: 'link', content: 'jane/design/doctorcare'}
        ],
        publishedAt: new Date('2024-04-30 10:00:00'),
    },
];

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    );
}
