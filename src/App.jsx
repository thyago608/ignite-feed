import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <section></section>
      </main>
    </>
  );
}

export default App;
