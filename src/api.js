import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://tranquil-hamlet-45234.herokuapp.com/api",
});

const fetchArticles = () => {
  return newsAPI
  .get("/articles")
  .then((res) => {
    return res.data.articles;
  });
};

const fetchArticleByID = (id) => {
  return newsAPI
  .get(`/articles/${id}`)
  .then(({ data }) => {
      return data.article;
  });
}

const fetchArticlesByTopic = (topic_slug) => {
  return newsAPI
  .get(`/articles?topic=${topic_slug}`)
  .then((res) => {
    console.log(res);
    return res.data.articles;
  });
};

const patchArticleVotes = (article_id, votes) => {
  return newsAPI
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(({data}) => {
      return data;
    })
    .catch((err) => console.log(err));
};

const fetchComments = (article_id) => {
  return newsAPI
  .get(`articles/${article_id}/comments`)
  .then((res) => {
    return res.data.comments;
  });
};

export { fetchArticles, fetchArticleByID, patchArticleVotes, fetchArticlesByTopic, fetchComments };
