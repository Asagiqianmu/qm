
$(document).ready(function() {
    var  isopen = true;
        $('#menu_list').click(function () {

                $("#blog_left").toggleClass("blog_left_on");
                $("#blog_list").toggleClass("blog_list_on");
                $("#blog_list").toggleClass("blog_list");
                $("#blog_left").toggleClass("blog_left");
                $(".text_head").css("z-index", "20");


        })
})