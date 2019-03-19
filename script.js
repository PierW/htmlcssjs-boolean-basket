$(document).ready(init);

function listGenerator(number) {

    $.ajax({
      url: "https://www.boolean.careers/api/array/basket?n=" + number,
      method: "GET",
      success: function(dati, stato) {

        console.log(dati);
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        for (var i = 0; i < number; i++) {

          var input = {
            idplayer : "<strong>" + dati.response[i].playerCode + "</strong>"
          };
          var completeHtml = template(input);

          var container = $(".left");
              container.append(completeHtml);
        }
      },
      error: function(richiesta, stato, errori) {
        alert("Errore di connessione");
      }
    });
}

function init() {

  var ask = prompt("Quanti players vuoi?");
      ask = Number(ask);
  listGenerator(ask);

}
