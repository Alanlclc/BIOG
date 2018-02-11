$(function(){
    $('.bot-img ul li').click(function(){
        var _this=$(this);   
        _this.addClass('active').siblings('li').removeClass('active');
        var int=_this.index();
        $('.activeimg').animate({left:int*-800},"slow");
    });
    var list=$('.bot-img ul li').length;
    $('.activeimg').css({
        width:list*800,
    });
    $('.right').click(function(){
        next(list)
    })
    $('.left').click(function(){
        prev(list)
    });

})
var index=0;
function next(list){
    if(index<list-1){
        index++;
        $('.activeimg').animate({left:index*-800},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active');
    }else{
        index=0;
        $('.activeimg').animate({left:index*-800},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active');
    }
}
function prev(list){
    index--;
    if(index<0){
        index=list-1;
        $('.activeimg').animate({left:index*-800},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active');
    }else{
        $('.activeimg').animate({left:index*-800},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active');
    }
}