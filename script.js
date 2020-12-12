$(document).ready(function() {

    //shows the date-- attached to currentDay ID
    var currentDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDate);

    
    // WHEN I scroll down
    // THEN I am presented with time blocks for standard business hours
    //8 blocks of time
    
    //variable that takes the current time from moment
    var currentTime = moment()hours();

    //variable that is attached to workTime ID
    var textBoxes = $(".workTime");
    
    
    
    // WHEN I view the time blocks for that day
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
    
    // WHEN I click into a time block
    // THEN I can enter an event
    
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    
    // WHEN I refresh the page
    // THEN the saved events persist


});