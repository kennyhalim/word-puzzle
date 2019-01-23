$(document).ready(function(){
  $("form#input").submit(function(event){

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    var strings = $("#string").val();
    $("#output").empty();
    $(".userinput").hide();
    $(".result").show();
    $("#answerbox").text(strings);
    for (var index = 0; index < strings.length; index+=1) {
      if (vowels.includes(strings[index].toLowerCase())){

        //alert("in array");
        $("#output").append("_");
      } else {
        //alert("not in array");
        $("#output").append(strings[index]);
      }
    }

    event.preventDefault();
  });

  $("button#showresult").click(function(){
    $("#answer").toggle();
  });

  $("button#goBack").click(function(){
    location.reload(); //refreshes the page
  });
});
