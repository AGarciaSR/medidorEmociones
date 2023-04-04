$(document).ready(function() {
    readjustSizes();
    $("td").click(function (e) { 
        e.preventDefault();
        seleccionaCelda(this.id);
    });
});
$(window).resize(function() {
    readjustSizes();
});
function readjustSizes(){
    let proportionScreen = $("body").width() / $("body").height();
    let newDivision = (proportionScreen * 1.7) / 1.93;
    if($("body").width()>768)
        $("#ejeY").height($("#ejeX").width() / newDivision);
    else
        $("#ejeY").height($("#ejeX").width() / 1);
}
function seleccionaCelda(id){
    $("td").removeClass("selected");
    $("#contLogoMedidor button").removeClass("visually-hidden");
    $("td#"+id).addClass("selected");
}