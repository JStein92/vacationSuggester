//backend logic

$(function(){ //document is ready

//create point variables to "score" user's choices
var hawaiiPoints = 0;
var egyptPoints = 0;
var texasPoints = 0;
var disneyworldPoints = 0;
var antarcticaPoints = 0;
var homePoints = 0;

  $('#question1 .hawaii').click(function(){
    $("#question1 .hawaii input").prop("checked", true)
  });
  $('#question1 .egypt').click(function(){
    $("#question1 .egypt input").prop("checked", true)
  });
  $('#question1 .texas').click(function(){
    $("#question1 .texas input").prop("checked", true)
  });
  $('#question1 .disneyworld').click(function(){
    $("#question1 .disneyworld input").prop("checked", true)
  });
  $('#question1 .antarctica').click(function(){
    $("#question1 .antarctica input").prop("checked", true)
  });
  $('#question1 .home').click(function(){
    $("#question1 .home input").prop("checked", true)
  });


  $('form#quiz').submit(function(event){
    //submit answers, if all are checked then show results, if not show warning
    event.preventDefault();
    for (var i = 1; i < 30; i++) {

      if ( $("input[name='question"+ i +"'"+"]:checked").val() == 'hawaii'){ //cycle through every question
        hawaiiPoints++;
      }
    }
    alert(hawaiiPoints);
  });

});
