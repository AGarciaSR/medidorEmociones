var celdaElegida;
var emociones = ["Rabioso","En pánico","Estresado","Agitado","Conmocionado","Sorprendido","Alentado","Festivo","Regocijado","Extasiado","Colérico","Furioso","Frustrado","Tenso","Aturdido","Hiperactivo","Jovial","Motivado","Inspirado","Exaltado","Echando humo","Atemorizado","Enojado","Nervioso","Inquieto","Energético","Animado","Entusiasmado","Optimista","Excitado","Ansioso","Aprensivo","Preocupado","Irritado","Molesto","Complacido","Feliz","Enfocado","Orgulloso","Emocionado","Repulsivo","Emproblemado","Intranquilo","Difícil","Enfurecido","Agradable","Alegre","Esperanzado","Juguetón","Dichoso","Disgustado","Sombrío","Decepcionado","Abatido","Apático","A gusto","Acomodadizo","Contento","Amoroso","Realizado","Pesimista","Malhumorado","Desanimado","Triste","Aburrido","Calmado","Seguro","Satisfecho","Agradecido","Conmovido","Enajenado","Miserable","Solitario","Descorazonado","Cansado","Relajado","Fresco","Descansado","Bendecido","Equilibrado","Desalentado","Deprimido","Hosco","Exhausto","Fatigativo","Suave","Pensativo","En paz","Cómodo","Despreocupado","Desesperado","Desesperanzado","Desolado","Agotado","Drenado","Soñoliento","Complaciente","Tranquilo","Acogedor","Sereno"];
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
    if($(window).width()<$(window).height()){
        $("#comenzar, #tablaEmociones, #textExplicativo").addClass("hidden");
        $("#textHorizontal").removeClass("hidden");
    }
    else{
        $("#comenzar, #tablaEmociones, #textExplicativo").removeClass("hidden");
        $("#textHorizontal").addClass("hidden");
        let proportionScreen = $(window).width() / $(window).height();
        let newDivision = (proportionScreen * 1.9) / 2.1;
        if($(window).width()>768)
            $("#ejeY").height($(window).height() / 1.216);
        else
            $("#ejeY").height($("#ejeX").width() / 1);
    }
}
function seleccionaCelda(id){
    celdaElegida = id
    $("td").removeClass("selected");
    $("#contLogoMedidor button").removeClass("visually-hidden");
    $("td#"+id).addClass("selected");
}
function enviaEmocion(){
    $("#nombre").html(emociones[celdaElegida.substring(4)-1]);
    if($(window).width()>768){
        var celda = 1;
        for(var i=0;i<emociones.length;i++){
            $("#cell"+celda).html(emociones[i]);
            celda++;
        }
    }
}