var playerName ;
$(function () {
  $("#start-button").click(function () {
    playerName = $("input[name = 'player']").val() || "player";
    $("#first-page").hide();
    console.log(playerName);
  });
});
