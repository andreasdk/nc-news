import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://tranquil-hamlet-45234.herokuapp.com/api",
});

const fetchArticles = () => {
  return newsAPI.get("/articles").then((res) => {
    return res.data.articles;
  });
};

const fetchArticleByID = (id) => {
  return newsAPI.get(`/articles/${id}`).then(({ data }) => {
      return data.article;
  });
}


export { fetchArticles, fetchArticleByID };
