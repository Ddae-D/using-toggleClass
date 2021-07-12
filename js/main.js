$(document).ready(function() {
    $("body").hide().fadeIn(2000);
    $("#checkBee").click(modifyImage);
});

function modifyImage() {
    $("#imgBee").toggleClass("styleModify");
}