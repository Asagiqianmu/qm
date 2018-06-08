
$(document).ready(function() {
    var  isopen = true;
    var all= $(".blog_conter_all");
    var css= $(".blog_conter_css");
    var html= $(".blog_conter_html");
    var js= $(".blog_conter_js");
    var other = $(".blog_conter_other");
    function menuon_off(){
        $("#blog_left").toggleClass("blog_left_on");
        $("#blog_list").toggleClass("blog_list_on");
        $("#blog_list").toggleClass("blog_list");
        $("#blog_left").toggleClass("blog_left");
        $(".text_head").css("z-index", "20");
    }

    $('#menu_list').click(function () {
        menuon_off();
    });
    $("#all").click(function () {
       all.css("display","block");
       $(".blog_conter_css,.blog_conter_html,.blog_conter_js,.blog_conter_other").css("display","none");
        menuon_off();
    });

    $("#css").click(function () {
        css.css("display","block");
        $(".blog_conter_all,.blog_conter_html,.blog_conter_js,.blog_conter_other").css("display","none");
        menuon_off();
    });

    $("#html").click(function () {
        html.css("display","block");
        $(".blog_conter_all,.blog_conter_css,.blog_conter_js,.blog_conter_other").css("display","none");
        menuon_off();
    });

    $("#js").click(function () {
        js.css("display","block");
        $(".blog_conter_all,.blog_conter_html,.blog_conter_css,.blog_conter_other").css("display","none");
        menuon_off();
    });
    $("#other").click(function () {
        other.css("display","block");
        $(".blog_conter_all,.blog_conter_html,.blog_conter_css,.blog_conter_js").css("display","none");
        menuon_off();
    });

})