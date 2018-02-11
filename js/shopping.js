// ハンバーガーメニュー
$(document).ready(function(){
    $("#sp_menu_btn").click(function(){
        $(".toggle").slideToggle();
    });
});

// カルーセル
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        items:1,
        autoplay:true
    });
});

// スライドショー
$(window).load(function(){
    $("#list_img img").click(function(){
        var img_src=$(this).attr("src");
        $("#display_img img").attr("src",img_src);
        return false;
    });
});

// TOP PAGEへヌルヌル移動
$(function(){
    $(".pagetop a").click(function(){
        $('html,body').animate({scrollTop:
            $($(this).attr("href")).offset().top},'slow','swing');
            return false;
    });
});