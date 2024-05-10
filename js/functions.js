var celdaElegida;
var celdasOn = 0;
$(document).ready(function() {
    readjustSizes();
    $("td").click(function (e) { 
        e.preventDefault();
        seleccionaCelda(this.id);
        enviaEmocion();
    });
    $('#modalEmocion').modal({ show: false});
});
$(window).resize(function() {
    readjustSizes();
});
function readjustSizes(){
    if($(window).width()<$(window).height()){
        $("#comenzar, #tablaEmociones, #textExplicativo").addClass("hidden");
        $("#textHorizontal").removeClass("hidden");
    }
    else{
        $("#comenzar, #tablaEmociones, #textExplicativo").removeClass("hidden");
        $("#textHorizontal").addClass("hidden");
        let proportionScreen = $(window).width() / $(window).height();
        let newDivision = (proportionScreen * 1.9) / 2.1;
        if($(window).width()>600)
            $("#ejeY").height($(window).height() / 1.216);
        else
            $("#ejeY").height($("#ejeX").width() / 1);
        if($(window).height()<600){
            var celda = 1;
            for(var i=0;i<emociones.length;i++){
                $("#cell"+celda+" br").css("display","none");
                celda++;
            }
        }
        else{
            var celda = 1;
            for(var i=0;i<emociones.length;i++){
                $("#cell"+celda+" br").css("display","block");
                celda++;
            }
        }
    }
}
function seleccionaCelda(id){
    celdaElegida = id;
    $("td").removeClass("selected");
    $("#contLogoMedidor button").removeClass("visually-hidden");
    $("td#"+id).addClass("selected");
}
function enviaEmocion(){
    $("#nombre").html(emociones[celdaElegida]);
    $("#causa-texto").html(causas[celdaElegida]);
    $("#funcion-texto").html(funciones[celdaElegida]);
    $("#consejos-texto").html(consejos[celdaElegida]);
    $(".enablers .btn").removeClass("active");
    $("#part1enabler .btn").addClass("active");
    $("#part1,#part2,#part3").hide();
    $("#part1").show();
    $("#modalEmocion").show();
    $(".enablers").height($("#enablersContainer").height());
    $("#modalEmocion").hide();
    $('#modalEmocion').modal('show');
}
function revelaCeldas(){
    if(celdasOn == 0){
        celdasOn = 1;
        $("#eyeCells").attr("src","./img/eye.png").attr("title","Haz click para ocultar los nombres de las emociones");
        for(var celda = 0;celda <= Object.keys(emociones).length;celda++){
            $("#cell"+celda).html(emociones["cell"+celda]);
        }
    }
    else{
        celdasOn = 0;
        $("#eyeCells").attr("src","./img/eye_closed.png").attr("title","Haz click para ver los nombres de las emociones");
        for(var celda = 0;celda <= Object.keys(emociones).length;celda++){
            $("#cell"+celda).html("<br>");
        }
    }
}
function showPart(part){
    $("#part1,#part2,#part3").hide();
    $(".enablers .btn").removeClass("active");
    $("#part"+part+"enabler .btn").addClass("active");
    $("#part"+part).show();
}