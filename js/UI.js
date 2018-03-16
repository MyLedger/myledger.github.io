$(function() {
    //右邊Gotop icon
    var $gotop = $(".gotop");
    $gotop.click(function(e) {
        $("html,body").stop(false, true).animate({ scrollTop: 0 }, 900);
        e.preventDefault();
    });
    //卷軸捲動動作 GoTop 
    $(window).on("scroll resize", function() {
        var TT = $(this).scrollTop();
        if (TT == 0) {
            $gotop.removeClass("show");
        } else {
            $gotop.addClass("show");
        }
    });
    //line-hover    
    $(".hover-li li a")
        .on("mouseover", function() {
            var navhover = $(this).parent("li");
            var nav_a_padding = parseInt($(this).css("padding-right"))
            var navhover_w = navhover.width() - nav_a_padding * 2;
            var navhover_h = navhover.height();
            var navhover_l = navhover.position().left + nav_a_padding;
            var navfocus_b = navhover.position().top + navhover_h - 5;
            $(this).parent("li").parent("ul").find(".focus-line").css({
                width: navhover_w,
                left: navhover_l,
                top: navfocus_b
            });
        })
        .on("mouseout", function() {
            $(this).parent("li").parent("ul").find(".focus-line").css({
                width: "",
                left: ""
            });
        });
    

    //FAQ
    // $(".faq-list li,.prev,.next,.faq-link").on("click",function(){
    //     var myid = $(this).attr("data");
    //     $(".faq-list li.default-focus").removeClass("default-focus");
    //     $(".faq-list li.focus").removeClass("focus");

    //     $(".faq-list").find("." + myid).addClass("focus");
    //     $(".faq .right").addClass("show-faq");
    //     $(".fill-bg").addClass("show");
    //     $(".faq .right .first").removeClass("first");
    //     $(".faq .right .show").removeClass("show");
    //     $(".faq .right").find("#" + myid).addClass("show");
    // }); 

    $(".faq-list li.default-focus").on("click",function(){
        $(".faq .right").addClass("show-faq");
        // $(".faq .right section").addClass("show");
        $(".fill-bg").addClass("show");
    }); 

    $(".close").on("click",function(){
        $(".faq .right").removeClass("show-faq");
        $(".faq .right section").removeClass("show");
        $(".fill-bg").removeClass("show");
    });

    //卷軸tab  
    var $scrollTab = $(".title").offset().top;
    $(window).on("scroll resize", function() {
        if ($(this).scrollTop() > $scrollTab) {
            $(".title").addClass("fixed-title");
            $(".close").addClass("title-color");

        } else {
            $(".title").removeClass("fixed-title");
            $(".close").removeClass("title-color");
        }
    });








});