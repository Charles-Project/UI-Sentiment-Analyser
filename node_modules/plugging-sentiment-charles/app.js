const Sentiment = require("sentiment");
const testingSentiment = new Sentiment();

const wordToTest = sentence => {
  const wordTo = testingSentiment.analyze(sentence);

  if (wordTo.positive.length > wordTo.negative.length) {
    return "positive";
  } else if (wordTo.positive.length < wordTo.negative.length) {
    return "negative";
  } else {
    return "neutral";
  }
};

module.exports = wordToTest;
