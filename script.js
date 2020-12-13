$(document).ready(function() {

    //variable to show the date- attached to currentDay ID
    var currentDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDate);
    
    //variable that takes the current time from moment
    var currentTime = moment().hours();

    //variable that is attached to workTime ID-- used for loop, which goes through all of the id's containing workTime
    var textBoxes = $(".workTime");

    //loop to go through all textBoxes- colors the textboxes according to time
    for (var i = 0; i < textBoxes.length; i++) {
        //variable to add workID to each textBoxes in the loop
        var workHour = $(textBoxes[i]).attr('workID');
        if (currentTime > workHour) {
            $(textBoxes[i]).addClass("past"); //past- turns textbox gray if the time has passed
        } else if (currentTime < workHour) {
            $(textBoxes[i]).addClass("future"); //future- turns textbox green if the time is in the future
        } else {
            $(textBoxes[i]).addClass("present"); //present- turns textbox red if the current time is within that hour
        }
    }

    //local storage
    //attaches a click function when btn is clicked
    $(".btn").on("click", function(event){
        //variable for when btn is clicked- selects one element up and adds to workID-- for localStorage key
        var hourInput = $(event.target).parent().attr("workID");
        //variable for when btn is clicked- accesses the textarea box, val returns what user inputed into textbox-- for localStorage value
        var textInput = $(event.target).siblings("textarea").val();
        
        //takes hourInput and textInput and stores it into localStorage-- hourInput is key, textInput is value
        localStorage.setItem(hourInput, textInput);
    })

    //accesses workTime with each defined workID- takes value of localStorage to display on application even if page has been refreshed
    $(".workTime[workID='9'] textarea").val(localStorage.getItem("9"));

    $(".workTime[workID='10'] textarea").val(localStorage.getItem("10"));

    $(".workTime[workID='11'] textarea").val(localStorage.getItem("11"));

    $(".workTime[workID='12'] textarea").val(localStorage.getItem("12"));

    $(".workTime[workID='13'] textarea").val(localStorage.getItem("13"));

    $(".workTime[workID='14'] textarea").val(localStorage.getItem("14"));

    $(".workTime[workID='15'] textarea").val(localStorage.getItem("15"));

    $(".workTime[workID='16'] textarea").val(localStorage.getItem("16"));

    $(".workTime[workID='17'] textarea").val(localStorage.getItem("17"));

    //when clear button is clicked, the localStorage clears and text boxes are emptied for user
    $(".clear").click(function() {
        localStorage.clear();
        //reloads the page so user sees empty text boxes
        window.location.reload();
    });
  });    