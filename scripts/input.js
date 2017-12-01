$(function(){
    $("#inputSearch").focus(function(){
        var txt = $(this).val();
        if($(this).val() ==this.defaultValue){
            $(this).val("");
        }
    }).blur(function(){
        var txt = $(this).val();
        if($(this).val() == ""){
            $(this).val(this.defaultValue);
        }
    });
})
$(function(){
    $("#nav li").hover(function(){
        $(this).find(".xiNav").show();
    },function(){
        $(this).find(".xiNav").hide();
    })
})
