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
    // $(".faq-list li.item-01").click();
    $(".faq-list li,.prev,.next,.faq-link").on("click",function(){
        var myid = $(this).attr("data");
        $(".faq-list li.focus").removeClass("focus");
        $(".faq-list").find("." + myid).addClass("focus");
        $(".faq .right").addClass("show-faq");
        // $("body").addClass("hide-scroll");
        $(".fill-bg").addClass("show");
        $(".faq .right .first").removeClass("first");
        $(".faq .right .show").removeClass("show");
        $(".faq .right").find("#" + myid).addClass("show");
    }); 

    $(".close").on("click",function(){
        $(".faq .right").removeClass("show-faq");
        $(".fill-bg").removeClass("show");
        // $("body").removeClass("hide-scroll");
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




    //卷軸tab  
    // var $scrollTab = $(".filter").offset().top;
    // $(window).on("scroll resize", function() {
    //     if ($(this).scrollTop() > $scrollTab) {
    //         $(".filter").addClass("fixed");
    //         $("#bubbly").addClass("fixed");

    //     } else {
    //         $(".filter").removeClass("fixed");
    //         $("#bubbly").removeClass("fixed");
    //     }
    // });



    //tab phone
    // $(".tab-phone").on("click", function(e) {
    //     $(".filter").addClass("show");
    //     $("body").addClass("hide-scroll-menu");

    // });
    // $(".filter li, .filter .close").on("click", function(e) {
    //     $(".filter").removeClass("show");
    //     $("body").removeClass("hide-scroll-menu");
    // })



    //tab filter
    // $(".tab-filter li").on("click", function(e) {
    //     var filter = $(this).attr("data-filter");
    //     var filterWarp = $(this).parent(".tab-filter").next(".tab-filter-warp");
    //     filterWarp.children(filter).removeClass("hidden");
    //     filterWarp.children("li").not(filter).addClass("hidden");

    //     var mydata = $(this).html();
    //     $(".tab-phone").html(mydata);
    //     e.preventDefault();
    // });



    //line-hover        
    // $(".hover-li li")
    //     .on("click", function() {
    //         var navhover = $(this);
    //         var nav_a_padding = parseInt($(this).css("padding-right"));
    //         var nav_a_margin = parseInt($(this).css("margin-right"));
    //         var navhover_w = navhover.width();
    //         var navhover_l = navhover.position().left + nav_a_padding;
    //         var navhover_t = navhover.position().top + nav_a_padding;
    //         $(this).parent("ul").find(".focus-line").css({
    //             width: navhover_w + 3,
    //             left: navhover_l,
    //         });
    //         $(this).parent("ul").find(".focus-outline").css({
    //             width: navhover_w + nav_a_padding * 2,
    //             left: navhover_l - nav_a_padding + nav_a_margin + 1,
    //             top: navhover_t - nav_a_padding,
    //         });
    //         $(".focus").removeClass("focus");
    //         $(this).addClass("focus");
    //     });
    // $(".hover-li li.focus").click();
    // $(window).on("scroll resize", function() {
    //     $(".hover-li li.focus").click();
    // });


    //show img   
    // $(".card li,.pop-bg .right,.pop-bg .left").on("click", function(e) {
    //     var my_click = $(this).attr("data-id");
    //     var my_card = $(".card");
    //     var my_li = $(".card").children("li:not(.hidden)");
    //     var my_item = my_card.find("#" + my_click);
    //     var my_img = my_item.find(".mask").html();
    //     var my_info = my_item.find("h3").html() + " - " + my_item.find("h4").html();
    //     var my_link = my_item.find(".mask").attr("data-a");
    //     var my_pop = $(".pop-bg");
    //     var my_pop_img = my_pop.find("img");

    //     $("body").addClass("hide-scroll");

    //     my_pop.find("img").remove();
    //     my_pop.addClass("show").find(".work-show-wrap").append($(my_img));
    //     my_pop.find(".info").text(my_info);
    //     my_pop.find(".demo").attr("href", my_link);

    //     //左右切換
    //     var my_list = my_li.length;
    //     var my_list_first = my_li.eq(0).attr("data-id");
    //     var my_list_last = my_li.eq(-1).attr("data-id");
    //     var my_item_r = my_item.nextAll("li:not(.hidden)").eq(0).attr("data-id");
    //     var my_item_l = my_item.prevAll("li:not(.hidden)").eq(0).attr("data-id");

    //     if (my_item_r == undefined) {
    //         my_pop.find(".right").attr("data-id", my_list_first);
    //         my_pop.find(".left").attr("data-id", my_item_l);
    //     } else if (my_item_l == undefined) {
    //         my_pop.find(".left").attr("data-id", my_list_last);
    //         my_pop.find(".right").attr("data-id", my_item_r);
    //     } else {
    //         my_pop.find(".right").attr("data-id", my_item_r);
    //         my_pop.find(".left").attr("data-id", my_item_l);
    //     }

    //     //Demo 按鈕
    //     if (my_link.indexOf("#") != -1) {
    //         my_pop.find(".demo").addClass("hidden");
    //         my_pop.find("img").addClass("noDemo");
    //     } else {
    //         my_pop.find(".demo").removeClass("hidden");
    //         my_pop.find("img").removeClass("noDemo")
    //     }
    //     e.preventDefault();
    //     e.stopPropagation();
    // })
    // $(".pop-bg .close").on("click", function(e) {
    //     $(".pop-bg").removeClass("show");
    //     $("body").removeClass("hide-scroll");
    //     e.preventDefault();
    // });



    //right scroll
    // $(".card li,.pop-bg .right,.pop-bg .left").on("click", function(e) {

    //     var wrap = $(".work-show-wrap")
    //     var height_wrap = wrap.height();
    //     var height_demo = wrap.find(".demo").height();
    //     var height_info = wrap.find(".info").height();
    //     var height_img = wrap.find("img").width();
    // });


    //About&Work
    // $(".menu li.about").on("click", function() {
    //     $("article").addClass("showAbout");
    // });
    // $(".menu li.work").on("click", function() {
    //     $("article").removeClass("showAbout");
    // });

    //bubbly
    // bubbly({
    //     blur: 1,
    //     colorStart: "#21292e",
    //     colorStop: "#1a1e20",
    //     bubbleFunc: () => `hsla(${Math.random() * 360}, 10%, 50%, ${Math.random() * 0.08})`
    // });







    //show popbox
    // function popbox(show) {
    //     $(".popbg-fill." + show).addClass("display-block");
    //     $("." + show + " .pop-box").addClass("display-block");
    //     $("body").addClass("overflow-hidden");
    // }
    // $(".show-pop").click(function(e) {
    //     popbox($(this).attr("show-pop"));
    //     e.preventDefault();
    // });



    //close popbox
    // $(".close, .close-btn, .pop-error").on("click", function(e) {
    //     $(this).parents(".popbg-fill").removeClass("display-block");
    //     $(this).parents(".pop-box, .pop-tutorial").removeClass("display-block");
    //     $("body").removeClass("overflow-hidden");
    //     $(".notice").removeClass("show");
    //     e.preventDefault();
    //     $(".imgareaselect-outer").hide().prev("div").hide();
    // })

    // $(".close-p").on("click", function(e) {
    //     $(this).parents(".popbg-fill").removeClass("display-block");
    //     $(this).parents(".pop-box").removeClass("display-block");
    //     e.preventDefault();
    // })

    //Save
    // $(".btn-save").on("click", function(e) {
    //     $(".popbg-fill.pop-success").stop(false, true).fadeIn(400).delay(1500).fadeOut(400);
    //     e.preventDefault();
    // })
    // $(".pop-success").on("click", function(e) {
    //     $(this).hide();
    // })





    //tab change
    // $(".tab-change li").on("click", function(e) {
    //     var show = $(this).index();
    //     $(this).addClass("focus").siblings(".focus").removeClass("focus");

    //     $(this).parent(".tab-change").next(".tab-change-warp").children().removeClass("show").eq(show).addClass("show");
    //     e.preventDefault();
    // });













});