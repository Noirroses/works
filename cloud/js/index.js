$(function () {
    $(document).off('click.bs.dropdown.data-api');
    $('.nav .dropdown').mouseenter(function(){
        $(this).addClass('open');
    }).mouseleave(function(){
        $(this).removeClass('open');
    });

    $(document).scroll(function () {
        if($(document).scrollTop()<10){
            $('.navbar,.dropdown-menu').css('background','transparent');
            $('.navbar-header a img').attr('src','img/logo.png');
            $('.navbar-toggle span').css('color','#fff');
            $('.nav li a').css('color','#fff').hover(function () {
                $(this).css({
                    'background':'rgba(0,0,0,0.4)',
                    'color':'#fff'
                });
            },function () {
                $(this).css({
                    'background':'transparent',
                    'color':'#fff'
                });
            });
            $('#loginBtn,#registerBtn').css({
                'border':'1px solid #05a8f5',
                'border-radius': '5px'
            });
        }else {
            $('.navbar,.dropdown-menu').css('background','#fff');
            $('.navbar-header a img').attr('src','img/logoblue.png');
            $('.navbar-toggle span').css('color','#333');
            $('.nav li a').css('color','#333').hover(function () {
                $(this).css({
                    'background':'transparent',
                    'color':'#05a8f5'
                });
            },function () {
                $(this).css('color','#333');
            });
            $('#loginBtn,#registerBtn').css({
                'border':'none'
            });
        }
    });
});