const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const ValidateToken = require("../validation/ValidateToken");

router.post("/news/:topic", ValidateToken , async (req, res) => {
  const request = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.params.topic}&page=0&api-key=${process.env.NEWS_API_KEY}`
  );
  const response = await request.json();

  res.send(response);
});

module.exports = router;
