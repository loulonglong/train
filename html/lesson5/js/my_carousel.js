$(document).ready(function(){


        // 初始化轮播
        $(".start-slide").click(function(){
            $("#movies-Carousel").carousel('cycle');
        });
        // 停止轮播
        $(".pause-slide").click(function(){
            $("#movies-Carousel").carousel('pause');
        });
        // 循环轮播到上一个项目
        $(".prev-slide").click(function(){
            $("#movies-Carousel").carousel('prev');
        });
        // 循环轮播到下一个项目
        $(".next-slide").click(function(){
            $("#movies-Carousel").carousel('next');
        });
        // 循环轮播到某个特定的帧
        $(".slide-one").click(function(){
            $("#movies-Carousel").carousel(0);
        });
        $(".slide-two").click(function(){
            $("#movies-Carousel").carousel(1);
        });
        $(".slide-three").click(function(){
            $("#movies-Carousel").carousel(2);
        });


        // 循环轮播到上一个项目
        $(".tv-prev-slide").click(function(){
            $("#tv-Carousel").carousel('prev');
        });
        // 循环轮播到下一个项目
        $(".tv-next-slide").click(function(){
            $("#tv-Carousel").carousel('next');
        });
        // 循环轮播到某个特定的帧
        $(".tv-slide-one").click(function(){
            $("#tv-Carousel").carousel(0);
        });
        $(".tv-slide-two").click(function(){
            $("#tv-Carousel").carousel(1);
        });
        $(".tv-slide-three").click(function(){
            $("#tv-Carousel").carousel(2);
        });

        $(".gallery-prev-slide").click(function(){
            $("#gallery-Carousel").carousel('prev');
        });
        // 循环轮播到下一个项目
        $(".gallery-next-slide").click(function(){
            $("#gallery-Carousel").carousel('next');
        });
        $(".news-prev-slide").click(function(){
            $("#news-Carousel").carousel('prev');
        });
        // 循环轮播到下一个项目
        $(".news-next-slide").click(function(){
            $("#news-Carousel").carousel('next');
        });

});
