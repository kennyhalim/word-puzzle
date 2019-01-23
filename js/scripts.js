$(document).ready(function(){
  $("form#input").submit(function(event){

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    var strings = $("#string").val();
    $("#output").empty();
    for (var index = 0; index < strings.length; index+=1) {

    if (vowels.includes(strings[index].toLowerCase())){

      //alert("in array");
      $("#output").append("-");
    } else {
      //alert("not in array");
      $("#output").append(strings[index]);
    }

  }

    event.preventDefault();
  });
});
