$(function(){
    $(window).scroll(function(){
        var wscroll = $(window).scrollTop();
        if(wscroll > 50){
            $("#navbar").removeClass("pos1").addClass("pos2");
        }else{
            $("#navbar").removeClass("pos2").addClass("pos1");
        }
    })
})

