import "./App.css";
import ArticleList from "./components/ArticleList";
import ArticleByID from "./components/ArticleByID";
import ArticleTopicList from "./components/ArticleTopicList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";




function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <Navigation />
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/articles/:article_id" element={<ArticleByID />} />
            <Route path="/articles/topic/:topic_slug" element={<ArticleTopicList />} /> 
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;

