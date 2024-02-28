import { useState } from "react";
import { Post } from "./components/Post/index";
import "./global.css";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Post author="Johnny" content="Este é um texto de teste" />
      <Post
        author="Eduardo"
        content="testando as possibilidades de novos posts."
      />
    </>
  );
}

export default App;
