


$("#currentDay").text(moment().format("dddd, MMMM Do"));

function createElements() {
//TODO: Have to add AM and PM. 
    for (var i = 9; i < 18; i++) {

       
        // create the elements
        var div = $('<div>');
        var h6 = $('<h6>');
        var textarea = $('<textarea>');
        var button = $('<button>');

        // add our classes
        div.addClass("time-block row");
        h6.addClass("hour col-1");
        textarea.addClass("description col-10 red");
        button.addClass("saveBtn col-1");
        
        
        

        h6.text(i)
        button.text('save')

        // append to the container
        div.append(h6, textarea, button);
        $('.container').append(div);
    }

}

createElements()