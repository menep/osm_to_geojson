import React from "react";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader";

import CoordinateInputForm from "./components/CoordinateInputForm";

function App() {
  return (
    <main className={styles.app}>
      <AppHeader />
      <CoordinateInputForm />
    </main>
  );
}

export default App;
