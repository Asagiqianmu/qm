
$(document).ready(function() {
    var  isopen = true;
    var all= $(".blog_conter_all");
    var css= $(".blog_conter_css");
    var html= $(".blog_conter_html");
    var js= $(".blog_conter_js");
    /*var other= $(".blog_conter_other);*/
        $('#menu_list').click(function () {

                $("#blog_left").toggleClass("blog_left_on");
                $("#blog_list").toggleClass("blog_list_on");
                $("#blog_list").toggleClass("blog_list");
                $("#blog_left").toggleClass("blog_left");
                $(".text_head").css("z-index", "20");


        })
    $("#all").click(function () {
       all.css("display","block");
       all.css("display","block");
    });

    $("#css").click(function () {
        css.css("display","block");
    });

    $("#html").click(function () {
        html.css("display","block");
    });

    $("#js").click(function () {
        js.css("display","block");
    });

    $("#other").click(function () {
        other.css("display","block");
    });
})