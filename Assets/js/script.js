// all in index.html
//  how to use bootstraps
// how to use moment.js
// how to use jquerry
// var h1El = $('<h1>');

// h1El.text('hello Jaya!')
// $('.container').append(h1El)

function createElements() {

    for (var i = 9; i < 18; i++) {
        // create the elements
        var div = $('<div>');
        var h6 = $('<h6>');
        var textarea = $('<textarea>');
        var button = $('<button>');

        // add our classes
        div.addClass("time-block row");
        h6.addClass("hour col-1");
        textarea.addClass("description col-10");
        button.addClass("saveBtn col-1");
        
        

        h6.text(i)
        button.text('save')

        // append to the container
        div.append(h6, textarea, button);
        $('.container').append(div);
    }

}

createElements()