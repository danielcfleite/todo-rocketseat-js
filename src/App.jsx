import "./Global.css";
import style from "./App.module.css";
import { Header } from "./components/header/header";
import { AppContent } from "./components/AppContent/content";

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Header />
        <AppContent />
      </div>
    </>
  );
}

export default App;
