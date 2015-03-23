/**
 * Created by user on 14-10-24.
 */
$(document).ready(function(){

    $("#about").click(function(){
        $(".page-title").show();
        $(".about-img").show();
        $(".about-main").show();
        $(".showindex-about").css({
            "position": "relative",
            "width": "961px",
            "height": "606px",
            "margin": "0px auto",
            "background-color": "#000000"
        });
        $("#specific-div-id").show(function(){
            $("#specific-div-id").hide();
            $("#show-index-id").hide();
            $("#show-about-id").fadeIn("show","swing",function(){
                $(".about-main").slideDown(1300);
            });
        });
    });

    $("#product").click(function(){

        $(".page-title").show();
        $("#product-main-div").show();
        $(".showindex-product").css({
            "position": "relative",
            "width": "961px",
            "height": "606px",
            "margin": "0px auto",
            "background-color": "#000000"
        });
        $("#specific-div-id").show(function(){
            $("#specific-div-id").hide();
            $("#show-index-id").hide();
            $("#show-product-id").fadeIn("show","swing");
        });


    });
    $("#staff").click(function(){
        $(".page-title").show();
        $(".show-img").show();
        $(".showindex-staff").css({
            "position": "relative",
            "width": "961px",
            "height": "606px",
            "margin": "0px auto",
            "background-color": "#000000"
        });
        $("#specific-div-id").show(function(){
            $("#specific-div-id").hide();
            $("#show-index-id").hide();
            $("#show-staff-id").fadeIn("show","swing");
        });
    });
    $("#message").click(function(){
        $(".page-title").show();
        $(".about-img").show();
        $(".about-main").show();
        $(".showindex-message").css({
            "position": "relative",
            "width": "961px",
            "height": "606px",
            "margin": "0px auto",
            "background-color": "#000000"
        });
        $("#specific-div-id").show(function(){
            $("#specific-div-id").hide();
            $("#show-index-id").hide();
            $("#show-message-id").fadeIn("show","swing");
        });
    });
    $("#sendBT").click(function(){
        $("#show-message-id").hide();
        $("#show-success-id").fadeIn();

    });
    $("#back-index").click(function(){
        $(".page-title").hide();
        $(".about-img").hide();
        $(".about-main").hide();
//        $(".showindex-about").addClass({
//            "animation": "mysecond 10s",
//            "-moz-animation": "mysecond 10s", /* Firefox */
//            "-webkit-animation": "mysecond 10s", /* Safari and Chrome */
//            "-o-animation": "mysecond 10s" /* Opera */
//        });
        $("#show-about-id").addClass("close-specific-div");
        $("#show-about-id").fadeOut(function(){
            $("#show-index-id").show();
            $("#show-about-id").removeClass();
        });
    });



    $("#back-index2").click(function(){
        $(".page-title").hide();
        $("#product-main-div").hide();
        $("#show-product-id").addClass("close-specific-div");
        $("#show-product-id").fadeOut(function(){
            $("#show-index-id").show();
            $("#show-product-id").removeClass();
        });
    });


    $("#back-index3").click(function(){
        $(".page-title").hide();
        $(".show-img").hide();
        $("#show-staff-id").addClass("close-specific-div");
        $("#show-staff-id").fadeOut(function(){
            $("#show-index-id").show();
            $("#show-staff-id").removeClass();
        });
    });

    $("#back-index4").click(function(){
        $(".page-title").hide();
        $(".about-img").hide();
        $(".about-main").hide();
//        $(".showindex-about").addClass({
//            "animation": "mysecond 10s",
//            "-moz-animation": "mysecond 10s", /* Firefox */
//            "-webkit-animation": "mysecond 10s", /* Safari and Chrome */
//            "-o-animation": "mysecond 10s" /* Opera */
//        });
        $("#show-message-id").addClass("close-specific-div");
        $("#show-message-id").fadeOut(function(){
            $("#show-index-id").show();
            $("#show-message-id").removeClass();
        });
    });


    $("#idealBT").click(function(){
        $("#idealBTP").css({
            "background-image":"url('../img/show_emp/smallshadow.png')",
            "background-repeat":"no-report"
        });
        $("#outlineBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#chairmansBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#outline-id").hide();
        $("#chairmans-id").hide();
        $("#ideal-id").slideDown(1000);
    });
    $("#outline-button").click(function(){
        $("#outlineBTP").css({
            "background-image":"url('../img/show_emp/smallshadow.png')",
            "background-repeat":"no-report"
        });
        $("#idealBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#chairmansBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#ideal-id").hide();
        $("#chairmans-id").hide();
        $("#outline-id").slideDown(1000);
    });
    $("#chairmans-button").click(function(){
        $("#chairmansBTP").css({
            "background-image":"url('../img/show_emp/smallshadow.png')",
            "background-repeat":"no-report"
        });
        $("#outlineBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#idealBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#ideal-id").hide();
        $("#outline-id").hide();
        $("#chairmans-id").show();
    });
    $("#wedateBT").click(function(){
        $("#wedateBTP").css({
            "background-image":"url('../img/show_emp/smallshadow.png')",
            "background-repeat":"no-report"
        });
        $("#booklistBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#booklist-id").hide();
        $("#wedate-id").slideDown(1000);
    });
    $("#booklistBT").click(function(){
        $("#booklistBTP").css({
            "background-image":"url('../img/show_emp/smallshadow.png')",
            "background-repeat":"no-report"
        });
        $("#wedateBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#wedate-id").hide();
        $("#booklist-id").slideDown(1000);
    });

});