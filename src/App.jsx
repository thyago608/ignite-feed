import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <aside>sidebar</aside>
        <section></section>
      </main>
    </>
  );
}

export default App;
