const apiCalls = {
  getMostPopularArticles() {
    const apiKey = "D1NckhzDRRGYUAewi47GHYUlwAlJQNGT";
    return fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
    ).then((res) => res.json());
  },
};

export default apiCalls;
