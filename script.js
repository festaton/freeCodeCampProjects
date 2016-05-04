
$(document).ready(function() {

  function getQuote() {

    var quotes = [
      '"Try not to become a man of success, but rather try to become a man of value."',
      '"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."',
      '"I can resist everything except temptation."',
      '"When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That\'s relativity."',
    '"Tell me and I forget, teach me and I may remember, involve me and I learn."',
  '"I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals."'];
    var author = ["- Albert Einstein", "- Albert Einstein","- Oscar Wilde", "- Albert Einstein","- Benjamin Franklin","- Winston Churchill"];

    var randomNum = Math.floor((Math.random() * quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }

  $(".btn").on("click", function() {
    getQuote();
  });

  $(".btn").mouseenter(function() {
    $(".btn").fadeTo("fast", 1);
  });

  $(".btn").mouseleave(function() {
    $(".btn").fadeTo("fast", .7);
  });

});
