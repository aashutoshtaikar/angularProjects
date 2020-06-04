
// function include(file) {

//     var script = document.createElement('script');
//     script.src = file;
//     script.type = 'text/javascript';
//     script.defer = true;

//     document.getElementsByTagName('head').item(0).appendChild(script);

// }

$(document).ready(function () {
    // include("util.js");

    var colorUtil = new Color();
    console.log("ready!");
    var color;
    $('.my-col').hover(function () {
        color = $(this).css('border-color');
        console.log(color);
        $(this).css('border-color', 'green');
    }, function () {
        $(this).css('border-color', color);
    });

});
