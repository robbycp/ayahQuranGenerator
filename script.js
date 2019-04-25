function getQuote() {
  var currentQuote, currentAuthor;
  var ayah = Math.floor(Math.random() * 6236) + 1 
  var url = "https://api.alquran.cloud/v1/ayah/"+ayah+"/en.asad";

  fetch(url)
  .then(response => response.json())
  .then(data => {
    // get data from api
    currentQuote = data.data.text
    currentAuthor = "Surah : " + data.data.surah.englishName + "(" + data.data.surah.number + ")" 
      + ", ayah " + data.data.numberInSurah;
    document.getElementById('text').innerHTML = currentQuote;
    document.getElementById('author').innerHTML = currentAuthor;

    // add href in tweet button
    var hrefTweetAttr = document.createAttribute('href');

    hrefTweetAttr.value = 'https://twitter.com/intent/tweet?hashtags=QuranWrobbycp&related=freecodecamp&text=' + 
      encodeURIComponent('"' + currentQuote + '" ~ ' + currentAuthor);
    document.getElementById('tweet-quote').setAttributeNode(hrefTweetAttr);
  })
  
  // animation in change of quote
  $(".quote-text").animate(
    { opacity: 0 }, 500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#text').text(currentQuote);
    }
  );

  $(".quote-author").animate(
    { opacity: 0 }, 500,
    function() {
      $(this).animate({ opacity: 1}, 500);
      $('#author').html(currentAuthor);
    }
  );
}
getQuote()

