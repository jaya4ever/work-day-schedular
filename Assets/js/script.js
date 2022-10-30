
// cureent day and time at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));




// clicking the save button for the time block
$(".saveBtn").on("click", function(){
   var time = $(this).siblings(".hour").text();

   var textForDescription = $(this).siblings(".description").val();

   localStorage.setItem(textForDescription ,time)
});


//each time block shows the color if it is present, past or future
 var currentTime = moment().hours();

  function timeblockForColor(){

    $(".time-block").each(function(){

        var inHour = ($(this).attr("id"));

      //TODO: do i need to remove class each time?
        if(inHour < currentTime ){
            $(this).addClass("past");

        }else if (inHour > currentTime){
            $(this).removeClass("past")
            $(this).addClass("future")

            
        }else{
            $(this).removeClass("future")
            $(this).addClass("present")
        }
    })
    
  };


  //after refreshing page i see if saved events is there
     function saveEventToUse(){
        $(".hour").each(function(){

            var currenthour =  $(this).text();
            var currentPlan = localStorage.getItem(currenthour);


            if(currentPlan !== null){
                $(this).siblings(".description").val(currentPlan);
            }

        });
     }
  

     //Invoking function
     timeblockForColor();
     saveEventToUse();














