$(document).ready(function() {
    readjustSizes();
});
$(window).resize(function() {
    readjustSizes();
});
function readjustSizes(){
    $("#ejeY").height($("#ejeX").width() / 1.7);
}