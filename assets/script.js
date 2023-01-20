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

   
})