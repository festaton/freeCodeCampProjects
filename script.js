
$(document).ready(function() {

  function getQuote() {

    var quotes = [
      "Try not to become a man of success, but rather try to become a man of value.",
      "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
      "I can resist everything except temptation.",
      "When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity."];
    var author = ["Albert Einstein", "Albert Einstein","Oscar Wilde", "Albert Einstein"];

    var randomNum = Math.floor((Math.random() * quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }

  $(".btn").on("click", function() {
    getQuote();
  });

});
