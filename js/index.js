/**
 * Created by user on 14-10-24.
 */

var int;
$(document).ready(function(){

    $("#about").click(function(){
        $(".page-title").show();
        $(".about-img").show();
        $(".about-main").show();
        $(".showindex-about").css({
            "position": "relative",
            "width": "916px",
            "height": "559px",
            "margin": "15px auto",
            "background-color": "#000000",
            "box-shadow": "0px 0px 10px #222"
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
            "width": "916px",
            "height": "559px",
            "margin": "15px auto",
            "background-color": "#000000",
            "box-shadow": "0px 0px 10px #222"
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
            "width": "916px",
            "height": "559px",
            "margin": "15px auto",
            "background-color": "#000000",
            "box-shadow": "0px 0px 10px #222"
        });
        int = setInterval(show,300);


        $("#specific-div-id").show(function(){
            $("#specific-div-id").hide();
            $("#show-index-id").hide();
            $("#show-staff-id").fadeIn("show","swing");
        });
    });
    function show(){
        var employers = document.getElementById("employersID");
        var i;
        for(i=0;i<employers.children.length;i++){
            if(employers.children[i].style.display =='none'){
                employers.children[i].style.display ="inline";

                return;
            }
        }

//        if(i==employers.children.length){
//            window.clearInterval();
//        }
    }

    $("#message").click(function(){
        $(".page-title").show();
        $(".about-img").show();
        $(".about-main").show();
        $(".showindex-message").css({
            "position": "relative",
            "width": "916px",
            "height": "559px",
            "margin": "0px auto",
            "background-color": "#000000",
            "box-shadow": "0px 0px 10px #222"
        });
        $("#specific-div-id").show(function(){
            $("#specific-div-id").hide();
            $("#show-index-id").hide();
            $("#show-message-id").fadeIn("show","swing");
        });
    });
    $("#sendBT").click(function(){
        var inputEmailt  = $("#inputEmail").val();
        var inputName = $("#inputName").val();
        var contectId = $("#contect_id").val();
        var reg = /\w+[@]{1}\w+[.]\w+/;
        if(!reg.test(inputEmailt)){
            alert("你输入的email不正确");

        }else if(inputName == ""){
            alert("你输入的姓名不能为空！");

        }else if(contectId == ""){
            alert("你输入的内容不能为空！");

        }else{
//            document.getElementById('mailTo').href="mailto:hi@museera.com‍?cc=hi@museera.com‍&subject='联系公司'&body="+'联系人:'+inputName+'email:'+inputEmailt+'内容：'+contectId;
//            document.getElementById('mailTo').click();
//            $("#sendBT").submit();
            this.form.submit();
            $("#show-message-id").hide();
            $("#show-success-id").fadeIn();
        }

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
        clearInterval(int);
        hideEmployers();
    });
    function hideEmployers(){
        var employers = document.getElementById("employersID");
        for(var i=0;i<employers.children.length;i++){
                employers.children[i].style.display ="none";
        }
    }

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
            "background-image":"url('./img/show_emp/smallshadow.png')",
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
            "background-image":"url('./img/show_emp/smallshadow.png')",
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
            "background-image":"url('./img/show_emp/smallshadow.png')",
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
//        $("#wedateBTP").css({
//            "background-image":"url('./img/show_emp/smallshadow.png')",
//            "background-repeat":"no-report"
//        });
        $("#booklistBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#booklist-id").hide();
        $("#booklist_content").hide();

        $("#wedate-id").show();
        $('#wedate_content').slideDown(1000);
    });
    $("#booklistBT").click(function(){
//        $("#booklistBTP").css({
//            "background-image":"url('./img/show_emp/smallshadow.png')",
//            "background-repeat":"no-report"
//        });
        $("#wedateBTP").css({
            "background-image":"url('')",
            "background-repeat":"no-report"
        });
        $("#wedate-id").hide();
        $("#wedate_content").hide();
        $("#booklist-id").show();
        $("#booklist_content").slideDown(1000);
    });

});
//$(window).scroll(function(){
//   $(window).scrollTop(0);
//});