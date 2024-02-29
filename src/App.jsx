import { useState } from "react";
import { Post } from "./components/Post/index";
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Johnny" content="Este é um texto de teste" />
          <Post
            author="Eduardo"
            content="testando as possibilidades de novos posts."
          />
        </main>
      </div>
    </>
  );
}

export default App;
