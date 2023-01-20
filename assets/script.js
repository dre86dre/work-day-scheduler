// jQuery to change title colour:
$('.display-3').css('color', '#06aed5');

// jQuery to change footer colour:
$('.upTop').css('color', '#06aed5');

// Code displaying todays date (day, month, year):
var todaysDate = moment().format('dddd, MMM Do YYYY - h:mm a');
$("#currentDay").html(todaysDate);

$(document).ready(function() {

    // saveBtn click event listener:
    $(".saveBtn").on("click", function() {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Code to save within the local storage:
        localStorage.setItem(time, text);
    })

    function Tracker() {

        // Code to get the current hour:
        var currentTime = moment().hour();

        // Code that loops over each time blocks:
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("clock")[1]);

            // Code that adds the background colours depending on the time:
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // Code that gets input from the local storage:
    $("#clock9 .description").val(localStorage.getItem("clock9"));
    $("#clock10 .description").val(localStorage.getItem("clock10"));
    $("#clock11 .description").val(localStorage.getItem("clock11"));
    $("#clock12 .description").val(localStorage.getItem("clock12"));
    $("#clock13 .description").val(localStorage.getItem("clock13"));
    $("#clock14 .description").val(localStorage.getItem("clock14"));
    $("#clock15 .description").val(localStorage.getItem("clock15"));
    $("#clock16 .description").val(localStorage.getItem("clock16"));
    $("#clock17 .description").val(localStorage.getItem("clock17"));

    Tracker();
})