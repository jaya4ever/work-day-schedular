
// currnt day and time at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));



//Debugging: defining save button
//var saveBtn = $(".saveBtn");

// clicking the save button for the time block
$(".saveBtn").on("click", function(){
   var time = $(this).siblings(".hour").text();

   var textForDescription = $(this).siblings(".description").val();

   localStorage.setItem(time,textForDescription );
});


//each time block shows the color if it is present, past or future
 //var currentTime = moment().hours();

  function timeblockForColor(){

    // this one get the current number of hours
    var currentTime = moment().hours();


    // using loop for time blocks for past present and future as they change color accordingly 
    $(".time-block").each(function(){

        var timeBlock = parseInt($(this).attr("id"));
        //var inHour = moment($(this).attr("id"), ["hA"]).hour()
       // var inHour = $(this).data('hour')

      //TODO: do i need to remove class each time?
        if(timeBlock < currentTime ){
            $(this).addClass("past");

        }else if (timeBlock > currentTime){
            $(this).removeClass("past");
            $(this).addClass("future");

            
        }else{
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    })
    
  };
  


  //after refreshing page i see if saved events is there
     function saveEventToUse(){
        $(".hour").each(function(){

            var currentHour =  $(this).text();
            var currentPlan = localStorage.getItem(currentHour);


            if(currentPlan !== null){
                $(this).siblings(".description").val(currentPlan);
            }

        });
     }
    
     

     //calling functions
     timeblockForColor();
     saveEventToUse();














