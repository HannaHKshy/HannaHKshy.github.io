$(function() {
  var currentPokemonId = 1;
  /* Escribe tu código aquí */
  // Busca un pokemon a partir del valor del input
  var ides = [];

  $("#buscar-pokemon").click(function() {
    entrada = $("#buscador-pokemon").val()
    ides.length = 0
    

    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${entrada}`, function(data) {
      var pokemonName = data.forms[0]["name"]
      var pokemonId = data.id
      var pokemonImage = data.sprites.front_default
      ides.push(pokemonId)

      $('#pokemon-name-data').text(pokemonName.toUpperCase());

      $('#pokemon-image').attr('src',pokemonImage);
      //$('#pokemon-image').attr('src',`<img src="${pokemonImage}" alt="pokemon-image" />`);
      })
  })



  $("#next-pokemon").click(function() {
    currentId = ides[ides.length - 1]

    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${currentId + 1}`, function(data) {
      var pokemonName = data.forms[0]["name"]
      var pokemonId = data.id
      var pokemonImage = data.sprites.front_default
      ides.push(pokemonId)
      $('#pokemon-name-data').text(pokemonName.toUpperCase());
      
      $('#pokemon-image').attr('src',pokemonImage);
    })
  })

  $("#previous-pokemon").click(function() {
    currentId = ides[ides.length - 1]

    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${currentId - 1}`, function(data) {
      var pokemonName = data.forms[0]["name"]
      var pokemonId = data.id
      var pokemonImage = data.sprites.front_default
      ides.push(pokemonId)
      $('#pokemon-name-data').text(pokemonName.toUpperCase());
      
      $('#pokemon-image').attr('src',pokemonImage);
    })
  })

  /* Hasta aquí :) */
});