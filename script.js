$(document).ready(init);

function listGenerator(number) {

    $.ajax({
      url: "https://www.boolean.careers/api/array/basket?n=", // + number,
      method: "GET",
      data : { n : number },
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
//------------------------------------------------------------------------------
        //Puoi comprimere il codice passando direttamente quello che il server ti passa
        // for (var i = 0; i < number; i++) {
        // 	var completeHtml = template(dati.response[i]);
        //     $(".left").append(completeHtml);
        // }
        //
        // <script id="entry-template" type="text/x-handlebars-template">
        //   <div class="mystyle">
        //     <strong>{{ playerCode }}</strong>
        //   </div>
        // </script>
//------------------------------------------------------------------------------
        outputData(dati.response);
      },
      error: function(richiesta, stato, errori) {
        alert("Errore di connessione");
      }
    });
}

function outputData(array) {

  var players = $(".mystyle");
  players.click(function() {

    var me = $(this);
    var index = me.index();

    var source = $("#dataplayers").html();
    var template = Handlebars.compile(source);

    var completeHtml = template(array[index]);
    $(".player-wrapper").html(completeHtml);
  });
}

function init() {

  var ask = prompt("Quanti players vuoi?");
      ask = Number(ask);
  listGenerator(ask);
}
