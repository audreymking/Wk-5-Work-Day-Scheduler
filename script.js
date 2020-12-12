$(document).ready(function() {

    
    // GIVEN I am using a daily planner to create a schedule
    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar

    
    var displayTime = $("#currentDay");
    var DateTime = luxon.DateTime;

    var currentDate = JSON.stringify(DateTime.DATETIME_FULL);
    //DateTime.local()
    
    console.log(currentDate)
    displayTime.text(currentDate);
    
});    

    



// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
//8 blocks of time
var textArea1 = 



// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist


