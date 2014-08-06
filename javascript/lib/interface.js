$(document).ready(function(){
        var p1 = new Player('Nikesh');
        var p2 = new Player('Sonu');
        var game = new Game(p1, p2);

        $('.choices img').on('click', function(){
          p1.picks($(this).data('pick'));
          p2.picks('rock');

          $("<li>" + game.winningMessage() + "</li>").prependTo('results').slideDown();

          $("#results li:gt(3)").fadeOut(function(){
          $(this).remove();
          console.log('A')
        });
    })
})