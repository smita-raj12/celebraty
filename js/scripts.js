$(document).ready(function() {
  $("#formCel").submit(function(event) {
    event.preventDefault();
    $("#formCel").hide();
    const IdInput = $("input#id").val();
    const nameInput =$("input#name").val();
    const ageInput = $("input#age").val();
    const genderInput= $("input#gender").val();
    const cityInput = $("input#city").val();
    
    $(".id").text(IdInput);
    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".gender").text(genderInput);
    $(".city").text(cityInput);

    if (ageInput <= 12) {
      $("#select-sm").show();
    }else if(ageInput >= 20 && ageInput<= 40){
      $("#select-up").show();
    }else if(ageInput >= 40){
      $("#select-ud").show();
    }
  });
});
