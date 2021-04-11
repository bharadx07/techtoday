const { response } = require("express");
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const ValidateToken = require("../validation/ValidateToken");

router.post("/news/:topic/:page", ValidateToken, async (req, res) => {
  const request = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
      req.params.topic
    }&page=${req.params.page - 1}&api-key=${process.env.NEWS_API_KEY}`
  );

  const response = await request.json();

  return res.status(200).send(response);
});

router.post("/jobs/:topic/", ValidateToken, async (req, res) => {
  try {
  const request = await fetch(
    `https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=${process.env.JOBS_APPLICATION_KEY}&app_key=${process.env.JOBS_API_KEY}&results_per_page=27&what=${req.params.topic}&content-type=application/json`
  );

  const response = await request.json();

  return res.send(response);
  } catch (err) {
    return res.status(500).send([]);
  }

});

module.exports = router; 
 