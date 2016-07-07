$(document).ready(function(){

  $("#rotate-text").textrotator({
    animation: "flip",
    separator: ",",
    speed: 3000
  });

  var listenOption_Artist = $('#listenOption_Artist'),
      listenOption_Album = $('#listenOption_Album'),
      listenOption_Track = $('#listenOption_Track'),
      listenOption_Playlist = $('#listenOption_Playlist');

  var inputSearch_Artist = $('#inputSearch_Artist'),
      inputSearch_Album = $('#inputSearch_Album'),
      inputSearch_Track = $('#inputSearch_Track'),
      inputSearch_Playlist = $('#inputSearch_Playlist');

  listenOption_Artist.on('click', function(){
    if(!$(this).hasClass('active')){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

      inputSearch_Artist.addClass('active');
      inputSearch_Artist.siblings().removeClass('active');
    }
  });

  listenOption_Album.on('click', function(){
    if(!$(this).hasClass('active')){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

      inputSearch_Album.addClass('active');
      inputSearch_Album.siblings().removeClass('active');
    }
  });

  listenOption_Track.on('click', function(){
    if(!$(this).hasClass('active')){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

      inputSearch_Track.addClass('active');
      inputSearch_Track.siblings().removeClass('active');
    }
  });

  listenOption_Playlist.on('click', function(){
    if(!$(this).hasClass('active')){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

      inputSearch_Playlist.addClass('active');
      inputSearch_Playlist.siblings().removeClass('active');
    }
  });


































});