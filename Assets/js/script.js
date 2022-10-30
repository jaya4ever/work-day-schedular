
// cureent day and time at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));




// clicking the save button for the time block
$(".saveBtn").on("click", function(){
   var time = $(this).siblings(".hour").text();
   var textForDescription = $(this).siblings(".description").val();
   localStorage.setItem(textForDescription ,time)
});


//each time block shows the color if it is present, past or future














