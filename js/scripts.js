$(document).ready(function() {
  $("#questionform").submit(function(event) {
    event.preventDefault();

    const fightInput = parseInt($("#fight").val());
    const movieInput = parseInt($("#movie").val());
    const foodInput = parseInt($("#food").val());
    const weaponInput = parseInt($("#weapon").val());
    const wtrInput = parseInt($("#wtr").val());

    if (fightInput + movieInput + foodInput + weaponInput + wtrInput < 6 ) {
      $("#ruby").show();
      $("#javascript").hide();
      $("#python").hide();
    } else if (fightInput + movieInput + foodInput + weaponInput + wtrInput > 10 ) {
      $("#javascript").show();
      $("#ruby").hide();
      $("#python").hide();
    } else {
      $("#python").show();
      $("#ruby").hide();
      $("#javascript").hide();
    }

  });
})