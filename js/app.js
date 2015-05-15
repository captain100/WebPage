var mainContainer;
window.onresize = function(){
    mainContainer =  document.getElementById("mainContainer");
    var heading = document.getElementById("heading");
    var footing = document.getElementById("footing");
    var height =  document.documentElement.clientHeight||document.body.clientHeight;
    var width = document.documentElement.clientWidth||document.body.clientWidth;
    if((height-100) < 659){
        mainContainer.style.margin =0+"px";
    }else{
        var marginHeight = (height-759)/2;
        mainContainer.style.marginTop = marginHeight+"px";
        mainContainer.style.marginBottom = marginHeight+"px";

    }
    if(width<961){
        mainContainer.style.width = 961+"px";
        heading.style.width = 961+"px";
        footing.style.width = 961+"px";
    }else{
        mainContainer.style.width = width+"px";
        heading.style.width = width+"px";
        footing.style.width= width+"px";
    }
}
window.onload = function(){
    mainContainer =  document.getElementById("mainContainer");
    var heading = document.getElementById("heading");
    var footing = document.getElementById("footing");
    var height =  document.documentElement.clientHeight||document.body.clientHeight;
    var width = document.documentElement.clientWidth||document.body.clientWidth;
    if((height-100) < 659){
        mainContainer.style.margin =0+"px";
    }else{
        var marginHeight = (height-759)/2;
        mainContainer.style.marginTop = marginHeight+"px";
        mainContainer.style.marginBottom = marginHeight+"px";

    }
    if(width<961){
        mainContainer.style.width = 961+"px";
        heading.style.width = 961+"px";
        footing.style.width = 961+"px";
    }else{
        mainContainer.style.width = width+"px";
        heading.style.width = width+"px";
        footing.style.width= width+"px";
    }
}


function mouseaction(){
    var idealBTP =  document.getElementById("idealBTP");
    var outlineBTP =  document.getElementById("outlineBTP");
    var chairmansBTP =  document.getElementById("chairmansBTP");

    idealBTP.onmouseover = function(){
        idealBTP.style.backgroundImage = "url('./smallshadow.png')";
    }
    outlineBTP.onmouseover = function(){
        outlineBTP.style.backgroundImage.url = '../img/show_emp/smallshadow.png';
    }
    chairmansBTP.onmouseover = function(){
        chairmansBTP.style.backgroundImage.url = '../img/show_emp/smallshadow.png';
    }
    idealBTP.onmouseout = function(){
        idealBTP.style.backgroundImage ="url('')";
    }
    outlineBTP.onmouseout = function(){
        outlineBTP.style.backgroundImage.url = '';
    }
    chairmansBTP.onmouseout = function(){
        chairmansBTP.style.backgroundImage.url = '';
    }

}

function closeWin(){
    window.open('','_self','');
    window.close();
}

