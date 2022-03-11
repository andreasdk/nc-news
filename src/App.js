import { useState, useMemo } from "react";
import ArticleList from "./components/ArticleList";
import ArticleByID from "./components/ArticleByID";
import ArticleTopicList from "./components/ArticleTopicList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";



function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  console.log(value)
  return (
      <BrowserRouter>
        <div className="App">
        <UserContext.Provider value={value}>
        <Navigation />
          <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/articles/:article_id" element={<ArticleByID />} />
              <Route path="/articles/topic/:topic_slug" element={<ArticleTopicList />} />
          </Routes>
          <Footer />
          </UserContext.Provider>
        </div>
      </BrowserRouter>
  );
}

export default App;

