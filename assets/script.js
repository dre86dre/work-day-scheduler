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

    Tracker();
})