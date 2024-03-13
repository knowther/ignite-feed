import { useState } from "react";
import { Post } from "./components/Post/Post";
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/knowther.png",
      name: "Johnny Wesley",
      role: "FullStack Developer",
    },
    content: [
      { type: "paragraph", content: "Eai pessoal" },
      {
        type: "paragraph",
        content: "Subi mais um projeto no portifólio, fiz pelo RocketSeatOne",
      },
      { type: "link", content: "johnnywesley.dev.br/ignite_feed" },
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocket",
    },
    content: [
      { type: "paragraph", content: "Eai pessoal" },
      {
        type: "paragraph",
        content: "Curti essa rede, nem quero usar mais o insta!!",
      },
      { type: "link", content: "johnnywesley.dev.br/ignite_feed" },
    ],
    publishedAt: new Date("2023-06-03 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                avatarUrl={post.author.avatarUrl}
                name={post.author.name}
                role={post.author.role}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
