// Display today's day and date
var today = moment();
$("#current-day").text(today.format("dddd, MMMM Do"));

var currentTime = moment();
$("#current-time").text(today.format("LT"));

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

  