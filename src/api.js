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

const patchArticleVotes = (article_id, votes) => {
  return newsAPI
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(({data}) => {
      return data;
    })
    .catch((err) => console.log(err));
};


export { fetchArticles, fetchArticleByID, patchArticleVotes };
