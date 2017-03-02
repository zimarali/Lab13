$(function(){

  $.get("https://www.reddit.com/r/aww/.json", function(goodness){
    var redditArray = goodness.data.children;
    for(i=0; i<redditArray.length; i++){
    var thumbnail = redditArray[i].data.thumbnail;
    var title = redditArray[i].data.title;
    var author = redditArray[i].data.author;
    var score = redditArray[i].data.score;
    var link = redditArray[i].data.permalink;
     $('section').append('<a href="' + "https://reddit.com" + link + '"><div><img src="' + thumbnail + '" /><h2>' + "Title: " + title + '</h2><h3>' + "Author: " + author + '</h3><h4>' + "Score: " + score + '</h4></div></a>');
     }
  });

});
