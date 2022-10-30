
// cureent day and time at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));





$(".saveBtn").on("click", function(){
   var time = $(this).siblings(".hour").text();
   var textForDescription = $(this).siblings(".description").val();
   localStorage.setItem(textForDescription ,time)
});















