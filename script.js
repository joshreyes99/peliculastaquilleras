$(document).ready(function () {
    $('.article').hide();
    $(".n1").show();
    $("#layout").css("grid-template-rows","1.22fr 4fr 1.22fr");

    //Todo esto sirve para hacer un menu de navegación
    $("#menu ul li a").click(function () {
        $('.article').hide();
        var activeTab = $(this).attr("href");

        $(activeTab).show();

    });


    //Ajustar correctamente a grid
   $("#primera").click(function(event){
        $("#layout").css("grid-template-rows","1.22fr 4fr 1.22fr"); 
    });
    $("#segunda").click(function(event){
        $("#layout").css("grid-template-rows","0.4fr 5fr 0.4fr"); 
    });
    $("#tercera").click(function(event){
        $("#layout").css("grid-template-rows","0.4fr 5fr 0.4fr"); 
    });

});