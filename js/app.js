$(document).ready(function(){
  //Rotal palabras
  $("#rotate-text").textrotator({
    animation: "flip",
    separator: ",",
    speed: 3000
  });

  //Enfocar el cursor en el input
  $(".inputSearch.active").focus();

  //Variables de las opciones a buscar
  var listenOption = $(".list-options li");
  var listenOption_Track = $("#listenOption_Track");
  var listenOption_Artist = $("#listenOption_Artist");
  var listenOption_Album = $("#listenOption_Album");
  var listenOption_Playlist = $("#listenOption_Playlist");

  //Variable del campo de busqueda
  var inputSearch_Name = $("#inputSearch_Name");

  //Variable que nos indicará que opción buscar (track, artist, album, playlist)
  var valueOfOption = $(".list-options li.active").attr("data-option");

  //Variable que guarda el contenido del input Seach
  var nameOfSearch;

  //En esta variable guardaré la URL con la que realizaré el llamado AJAX
  var urlToFindSomething;


  listenOption.on("click", function(){
    //Si una opción de busqueda no tiene la clase active se le agrega, y se quita a los demás.
    if(!$(this).hasClass("active")){
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    }

    //Agregamos el data option de la opción que se selecciono
    valueOfOption = $(this).attr("data-option");

    //Se agrega el data-option como valor al data-search del campo de busqueda
    inputSearch_Name.attr("data-search", ""+valueOfOption+"");
    inputSearch_Name.attr("placeholder", "Search "+valueOfOption+"");

    console.log(valueOfOption);
  });

  function showResults(url){
    var template = Handlebars.compile($("#resultsTemplate").html());
    $.getJSON(url, function(data){
      $('#results').append(template(data));
      console.log(data);
    });
    console.log("Funciono");
  }

  inputSearch_Name.keypress(function(event){
    if(event.keyCode == 13){
      event.preventDefault();
      $('.results .results-song').remove();

      nameOfSearch = inputSearch_Name.val();
      nameOfSearch = encodeURIComponent(nameOfSearch);

      //En esta variable guardaré la nueva url
      urlToFindSomething = "https://api.spotify.com/v1/search?q="+nameOfSearch+"&type="+valueOfOption+"";

      console.log("Mi URL: " + urlToFindSomething);
      console.log("Hola Enter");

      showResults(urlToFindSomething);
    }
  });

});