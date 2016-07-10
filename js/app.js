$(document).ready(function(){

  $("#rotate-text").textrotator({
    animation: "flip",
    separator: ",",
    speed: 3000
  });

  $(".inputSearch.active").focus();

  var listenOption = $(".list-options li");
  var listenOption_Track = $("#listenOption_Track");
  var listenOption_Artist = $("#listenOption_Artist");
  var listenOption_Album = $("#listenOption_Album");
  var listenOption_Playlist = $("#listenOption_Playlist");

  var inputSearch_Name = $("#inputSearch_Name");
  var valueOfOption = $(".list-options li.active").attr("data-option");

  var nameOfSearch;
  var urlToFindSomething;

  listenOption.on("click", function(){
    if(!$(this).hasClass("active")){
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    }

    inputSearch_Name.focus();
    valueOfOption = $(this).attr("data-option");

    inputSearch_Name.attr("placeholder", "Search "+valueOfOption+"");

    console.log(valueOfOption);
  });

  function showResults(url){

    function callJSON(templateID){
      var template = Handlebars.compile($(templateID).html());
      $.getJSON(url, function(data){
        $('#results').append(template(data));

        console.log(data);

        // if(data.tracks.items.length == 0){
        //   $('#no-result').show();
        // } else {
        //   $('#no-result').hide();
        // }

        // if(data.artists.items.length == 0){
        //   $('#no-result').show();
        // } else {
        //   $('#no-result').hide();
        // }

        // if(data.albums.items.length == 0){
        //   $('#no-result').show();
        // } else {
        //   $('#no-result').hide();
        // }

        // if(data.playlists.items.length == 0){
        //   $('#no-result').show();
        // } else {
        //   $('#no-result').hide();
        // }

      });
    }

    if(valueOfOption == 'track'){
      callJSON("#resultsTrackTemplate");
    } else if(valueOfOption == 'artist'){
      callJSON("#resultsArtistTemplate");
    } else if(valueOfOption == 'album'){
      callJSON("#resultsAlbumTemplate");
    } else if(valueOfOption == 'playlist'){
      callJSON("#resultsPlaylistTemplate");
    }

    console.log("Funciono");

    if(!$('#no-result').has().siblings('.results-song')){
      $('#no-result').show();
    } else {
      $('#no-result').hide();
    }

  }

  inputSearch_Name.keypress(function(event){
    if(event.keyCode == 13){
      event.preventDefault();
      $('.results .results-song').remove();

      nameOfSearch = inputSearch_Name.val();
      nameOfSearch = encodeURIComponent(nameOfSearch);

      urlToFindSomething = "https://api.spotify.com/v1/search?q="+nameOfSearch+"&type="+valueOfOption+"";

      console.log("Mi URL: " + urlToFindSomething);
      console.log("Hola Enter");

      showResults(urlToFindSomething);
      
    }

  });

});