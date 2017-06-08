//backend logic

$(function(){ //document is ready

  $('#question1 .hawaii').click(function(){
    //alert(this.className);
    $("#question1 .hawaii input").prop("checked", true)
  });
  $('#question1 .other').click(function(){
    //alert(this.className);
    $("#question1 .other input").prop("checked", true)
  });

  $('form#quiz').submit(function(event){
    //submit answers, if all are checked then show results, if not show warning
    event.preventDefault();
    alert('test');
  });

});
