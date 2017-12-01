$(function(){
    var $imgroll = $("#xiImageroll div a");
    var len = $imgroll.length;
    var index = 0;
    var timer = null;
    $imgroll.mouseover(function(){
        index = $imgroll.index(this);
        showImg(index);
    }).eq(0).mouseover();
    $("#xiImageroll").hover(function(){
        if(timer){
            clearInterval(timer);
        }
    },function(){
        timer = setInterval(function(){
            showImg(index);
            index++;
            if(index==len){
                index=0;
            }
        },3000);
    }).trigger("mouseleave");
})
function showImg(index){
    var $rolll = $("xiImageroll")
    var $rol = $rolll.find(" div a");
    var newhref = $rol.eq(index).attr("href");
    $("#imgWrap").attr("href",newhref)
                 .find("img").eq(index).stop(true,true).fadeIn()
                 .siblings().fadeOut(); //将当前href赋给大图并且将未执行的动画清空，慢入图片同时隐藏同胞图片
}
$(function(){
    $("#xiBrandTab li a").click(function(){
        $(this).parent().addClass("chos")
        .siblings().removeClass("chos");
    var ide = $("#xiBrandTab li a").index(this);
    showBrandList(ide);
    return false;
}).eq(0).click
});
function showBrandList(index){
    var $rll = $("#xiBrandList");
    var ro = $rll.find("li").outerWidth();
    ro = ro * 4;
    $rll.stop(true,false).animate({left:-ro*index},1000);
}
$(function(){
    var $div_li = $("div.menu ul li");
    $div_li.click(function(){
        $(this).addClass("chos")
        .siblings().removeClass("chos");
        var index = $div_li.index(this);
        $("div.box > div").eq(index).show()
        .siblings().hide();
    })
})