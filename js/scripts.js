//backend logic
var hawaiiPoints = {
  score: 0,
  name:'hawaii'
}
var egyptPoints = {
  score: 0,
  name:'egypt'
}
var texasPoints = {
  score: 0,
  name:'texas'
}
var disneyworldPoints = {
  score: 0,
  name:'disney world'
}
var antarcticaPoints = {
  score:0,
  name:'antarctica'
}
var homePoints = {
  score: 0,
  name:'home'
}

function checkValues(){ // go through the 5 questions and check which value is checked by user, then add appropriate point
  for (var i = 1; i <= 5; i++) {

    if ( $("input[name='question"+ i +"'"+"]:checked").val() === 'hawaii'){ //if the checked box's
    hawaiiPoints.score++;
  } else if ( $("input[name='question"+ i +"'"+"]:checked").val() === 'egypt'){
    egyptPoints.score++;
  } else if ( $("input[name='question"+ i +"'"+"]:checked").val() === 'texas'){
    texasPoints.score++;
  } else if ( $("input[name='question"+ i +"'"+"]:checked").val() === 'disneyworld'){
    disneyworldPoints.score++;
  } else if ( $("input[name='question"+ i +"'"+"]:checked").val() === 'antarctica') {
    antarcticaPoints.score++;
  } else if ( $("input[name='question"+ i +"'"+"]:checked").val() === 'home') {
    homePoints.score++;
  } else{
    //    alert('checked box for ' + 'question'+i+' has no value or question' + i + ' is not found')
  }
}
}

$(function(){ //document is ready
  $('input').prop("checked", false) //uncheck all boxes on load

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


  $('.col-md-4').hover(function(){
    this.style.borderColor="#70a6ff";
  });
  $('.col-md-4').mouseleave(function(){
    this.style.borderColor="#a3c6ff";
  });

  $('form#quiz').submit(function(event){
    event.preventDefault();

    //reset scores
    hawaiiPoints.score=0;
    egyptPoints.score = 0;
    texasPoints.score = 0;
    disneyworldPoints.score = 0;
    antarcticaPoints.score = 0;
    homePoints.score = 0;

    $('#hawaiiResult').hide();
    $('#egyptResult').hide();
    $('#texasResult').hide();
    $('#disneyworldResult').hide();
    $('#antarcticaResult').hide();
    $('#homeResult').hide();

    checkValues();     // call function to check which values are "checked" by user and add points accordingly

    //check to make sure max points are reached (I'm sure there's a better way)
    if ((hawaiiPoints.score+egyptPoints.score+texasPoints.score+disneyworldPoints.score+antarcticaPoints.score+homePoints.score)<5){
      alert('Please answer all the questions!');
    } else {
      $('#destination').text('');

      //find max score
      var finalDestination = Math.max(hawaiiPoints.score, egyptPoints.score, texasPoints.score,
        disneyworldPoints.score, antarcticaPoints.score, homePoints.score);

        //put objs in an array,check which ones have the max score, add name value to destination ID string
        var scoreArray = [hawaiiPoints,egyptPoints,texasPoints,disneyworldPoints,antarcticaPoints,homePoints];
        var destCount = 0;
        var destinationString = '';
        for (var i = 0; i < scoreArray.length; i++) {
          if (scoreArray[i].score === finalDestination){
            destinationString += (scoreArray[i].name.toUpperCase() + " or ");
            $('#'+ (scoreArray[i].name.toString() + 'Result')).show();
          }

        }
        //remove the extra " or "
        destinationString = destinationString.toString().substring(0, destinationString.length-4)

        //get name but only display if it's not NULL
        var nameString = $('#nameInput').val();
        if(nameString){
          $('#userName').text(nameString + ', you')
        }else {
          $('#userName').text('You')
        }

        $('#destination').text(destinationString); //add destination string to ID
        $('.result').slideDown("slow"); // show results
        $("html, body").animate({ scrollTop: $(document).height() }, 1000); //slide to  bottom of page
      }

    });

  });
