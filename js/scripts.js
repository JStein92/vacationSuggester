//backend logic
var hawaiiPoints = 0;
var egyptPoints = 0;
var texasPoints = 0;
var disneyworldPoints = 0;
var antarcticaPoints = 0;
var homePoints = 0;

function checkValues(){
  for (var i = 1; i <= 5; i++) { // go through the 5 questions

    if ( $("input[name='question"+ i +"'"+"]:checked").val() == 'hawaii'){ //if the checked box's
      hawaiiPoints++;
    } else if ( $("input[name='question"+ i +"'"+"]:checked").val() == 'egypt'){
      egyptPoints++;
    } else if ( $("input[name='question"+ i +"'"+"]:checked").val() == 'texas'){
      texasPoints++;
    } else if ( $("input[name='question"+ i +"'"+"]:checked").val() == 'disneyworld'){
      disneyworldPoints++;
    } else if ( $("input[name='question"+ i +"'"+"]:checked").val() == 'antarctica') {
      antarcticaPoints++;
    } else if ( $("input[name='question"+ i +"'"+"]:checked").val() == 'home') {
      homePoints++;
    } else{
      alert('checked box for ' + 'question'+i+' has no value or question' + i + ' is not found')
    }
  }
}

$(function(){ //document is ready

//create point variables to "score" user's choices


  $('#question1 figure').click(function(){
    $('input',this).prop("checked", true)
  });
  $('#question2 figure').click(function(){
    $('input',this).prop("checked", true)
  });
  $('#question3 figure').click(function(){
    $('input',this).prop("checked", true)
  });
  $('#question4 figure').click(function(){
    $('input',this).prop("checked", true)
  });
  $('#question5 figure').click(function(){
    $('input',this).prop("checked", true)
  });





  $('form#quiz').submit(function(event){
    //reset scores
    hawaiiPoints = 0;
    egyptPoints = 0;
    texasPoints = 0;
    disneyworldPoints = 0;
    antarcticaPoints = 0;
    homePoints = 0;

    event.preventDefault();
    checkValues(); // call function to check which values are "checked" by user and add points accordingly

    alert('hawaii: ' + hawaiiPoints + ' egypt: ' + egyptPoints + ' texas: ' + texasPoints + ' disneyworld: ' +
  disneyworldPoints + ' antarctica: ' + antarcticaPoints + ' home:' + homePoints);
  });

});
