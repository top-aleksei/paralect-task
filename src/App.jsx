import s from "./App.module.css";
import Header from "./components/header/header";
import { BrowserRouter } from "react-router-dom";
import IndexPage from "./components/indexPage/indexPage";
import { Route, Routes } from "react-router-dom";
import UserPage from "./components/userPage/userPage";
import ErrorPage from "./components/errorPage/ErrorPage";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      <div className={s.app}>
        <Header
          setUser={(v) => {
            setCurrentUser(v);
          }}
        />
        <div className={s.body}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route
              path={`/${currentUser}`}
              element={<UserPage currentUser={currentUser} />}
            />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
