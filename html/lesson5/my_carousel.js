$(document).ready(function(){


        // 初始化轮播
        $(".start-slide").click(function(){
            $("#gallery-Carousel").carousel('cycle');
        });
        // 停止轮播
        $(".pause-slide").click(function(){
            $("#gallery-Carousel").carousel('pause');
        });
        // 循环轮播到上一个项目
        $(".prev-slide").click(function(){
            $("#gallery-Carousel").carousel('prev');
        });
        // 循环轮播到下一个项目
        $(".next-slide").click(function(){
            $("#gallery-Carousel").carousel('next');
        });
        // 循环轮播到某个特定的帧
        $(".slide-one").click(function(){
            $("#gallery-Carousel").carousel(0);
        });
        $(".slide-two").click(function(){
            $("#gallery-Carousel").carousel(1);
        });
        $(".slide-three").click(function(){
            $("#gallery-Carousel").carousel(2);
        });


});
