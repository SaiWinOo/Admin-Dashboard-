$(".full-screen-btn-click").click(function(){
    $(".catch-btn").toggleClass("full-screen-btn");
    if($(".catch-btn").hasClass("full-screen-btn")){
        $(this).html(`<i class="feather-minimize-2"></i>`)
    }
    else{
        $(this).html(`<i class="feather-maximize-2"></i>`)
    }

});
$(".show-side-bar-btn").click(function(){
    $(".sidebar").animate({marginLeft:0});
});

$(".hide-side-bar-btn").click(function(){
    $(".sidebar").animate({marginLeft:"-100%"});
});

function go(url){
    setTimeout(() => {
        location.href = `${url}`;
    }, 1000);
};


$(function () {
    $('[data-toggle="popover"]').popover()
});



$(document).ready(function () {
    $('#item-table').DataTable();
});

let screenHeight = $(window).height();
let cureentMenuHeight = $(".nav-menu .active").offset().top;



if(cureentMenuHeight> screenHeight* 0.8){
    $(".sidebar").animate({
        scrollTop: cureentMenuHeight
    }, 1000)
}

