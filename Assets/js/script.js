
// cureent day and time at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));





$(".saveBtn").on("click", function(){
   var descriptionForText = $(this).siblings(".description").val();
   var time = $(this).parent().attr("id")
   localStorage.setItem(descriptionForText ,time)
})













