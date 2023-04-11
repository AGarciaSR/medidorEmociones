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
    let proportionScreen = $("body").width() / $("body").height();
    let newDivision = (proportionScreen * 1.7) / 1.93;
    if($("body").width()>768)
        $("#ejeY").height($("#ejeX").width() / newDivision);
    else
        $("#ejeY").height($("#ejeX").width() / 1);
}
function seleccionaCelda(id){
    celdaElegida = id
    $("td").removeClass("selected");
    $("#contLogoMedidor button").removeClass("visually-hidden");
    $("td#"+id).addClass("selected");
}
function enviaEmocion(){
    $("#nombre").html(emociones[celdaElegida.substring(4)-1])
}