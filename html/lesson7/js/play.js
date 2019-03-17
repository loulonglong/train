'use strict';
window.onload=function(){
        // 玩具背景数组
        var bg = ["toy1.png","toy2.png","toy3.png","toy4.png","toy5.png","toy6.png","toy7.png","toy8.png"];
        // 玩具数组
        var toys = new Array();
        // 胜利后div
        var wingame = "<div class='win' >恭喜夹到了!</button></div>" ;
        // movement
        var movement = false;
        // 是否抓到
        var catched = false;
        // 声明初始爪子位置
        var nowleft = 0;
        // 声明定时器
        var timer;
        // //爪子
        var paw = $("#paw");
        // 爪子图片
        var pawOpen = 'url(images/paw_open1.png)';
        var pawClose = 'url(images/paw_close.png)';
        // 初始化玩具位置
        var toyTop  = 420;
        var toyZIndex = 0;
        // 按钮
        var leftButton = $("#moveL");
        var rightButton = $("#moveR");
        var goButton = $("#go");

        // 玩具类定义
        function Toy(left,bgPath,top,zIndex) {
            this.left = left;
            this.bgPath = bgPath;
            this.top = top;
            this.zIndex =zIndex;
            // 初始化
            // this.init =function() {
            //     // 创建div
            //     this.dom = $("<div class='toy'></div>");
            //     // 加入到屏幕
            //     $(".screen").append(this.dom);
            //     // 设置初始位置
            //     this.dom.css('left', this.left + 'px');
            //     console.log(this.bgPath);
            //     // 设置背景
            //     this.dom.css('background-image', this.bgPath);
            // }
            // 对象生成初始化
            this.init();
            //玩具被抓住后执行
            // this.catch = function(){
            //     // 抓住
            //     catched = true;
            //     // 声明对象引用
            //     var toy =this.dom;
            //     // 改变对象状态
            //     toy.addClass("catched");
            //     // 玩具运动
            //     toy.animate({'top': 0}, 2000, "linear", function(){});
            //     console.log("catch:" +toy);
            //     // 完成后出庆祝效果（2秒后）
            //     setTimeout(function(){
            //        $(".screen").append(wingame);
            //        catched =false;
            //     }, 2000);
            // }
        }
        // 原型添加init函数
            Toy.prototype.init =function() {
                // 创建div
                this.dom = $("<div class='toy'></div>");
                // 加入到屏幕
                $(".screen").append(this.dom);
                // 设置初始位置
                this.dom.css({'left': this.left + 'px','top': this.top + 'px','z-index': this.zIndex });

                console.log(this.bgPath);
                // 设置背景
                this.dom.css('background-image', this.bgPath);
            }


        // 原型添加catch函数
            Toy.prototype.catch = function(){

                // 声明对象引用
                var toy =this.dom;
                // 两秒后玩具被抓起
                setTimeout(function(){
                // 改变对象状态
                toy.addClass("catched");
                // 玩具运动
                toy.animate({'top': 0}, 2000, "linear", function(){});
                console.log("catch:" +toy);
                }, 2000);
                // 完成后出庆祝效果（4秒后）
                setTimeout(function(){
                   $(".screen").append(wingame);
                   catched =false;
                }, 4000);
            }


        // 随机生成玩具
        for (var i = 0; i < 23; i++) {

            // 随机玩具的位置
            var left =(i + Math.floor(Math.random()))*20 ;
            // 随机玩具的背景图
            var bgPath = 'url(images/' + (bg[Math.floor(Math.random()*bg.length)]) +')';
            // 错开三层摆放(添加高度和深度属性)
             if(i%3 ==0 ){
                var top = 420;
                var zIndex = 0;
             }
             else if(i%3 ==1 ) {
                var top = 400;
                var zIndex = -5;
             }
            else {
                var top = 380;
                var zIndex = -10;
             }
            // 玩具加入数组
            toys.push(new Toy(left,bgPath,top,zIndex));
        };

        // 左键函数
        leftButton.click(function(event) {
            // 正在运动
            if(!movement && !catched){

            reset();
            // 向左移动
            timer = setInterval(function(){
                nowleft -= 5;
                // 判断是否到左边界
                if(nowleft < 0) {
                    clearInterval(timer);
                    nowleft = 0;
                }
                // 爪子向左移动
                paw.css('left', nowleft + 'px');
                },50);
            }
        });

        // 右键函数
       rightButton.click(function(event) {
            //判断是否在运动或者抓到玩具
            if(!movement && !catched){
                reset();
                // 向右移动
                timer = setInterval(function(){
                    nowleft += 5;
                    // 判断是否到右边界
                    if(nowleft >420 ) {
                        clearInterval(timer);
                        nowleft = 420;
                    }
                    // 爪子向右移动
                    paw.css('left', nowleft + 'px');

                },50);
            }
        });

        //go 按钮函数
        goButton.click(function(event) {
            //判断是否在运动或者抓到玩具
            if(!movement && !catched){
                reset();
                // 运动开始
                movement =true;

                // 爪子移动

                    // 遍历玩具数组
                    for (var i = 0; i < toys.length; i++) {
                        // 抓到玩具的情况
                        if((toys[i].left>(nowleft-10)&&(toys[i].left<(nowleft+10))))
                        {
                        // 读取玩具位置
                         toyTop =toys[i].top;
                         toyZIndex = toys[i].zIndex;
                         // 调用爪子移动函数
                         pawMove(toyTop,toyZIndex);
                         console.log( toys[i]);
                        // 抓取玩具
                        catched = true;
                        toys[i].catch();
                        // 从玩具数组中删除夹到玩具
                        toys.splice(i, 1);
                        }
                    };
                // 没有抓到的情况
                if(!catched)
                pawMove(toyTop);

            }
        });
        // 爪子移动函数
        function pawMove(top,zIndex){

                paw.animate({'top': -630 +top}, 2000, "linear", function(){
                    paw.css('z-index', zIndex+1 );
                    paw.css('background-image', pawClose);
                    // 爪子收回
                    paw.animate({'top': -630}, 2000, "linear", function(){
                    // 运动结束
                    movement = false;
                    });
                });
        }

        // 重置状态
        function reset(){
            //删除胜利画面
            $(".win").remove();
            // 删除抓到的玩具
            $(".catched").remove();
            // 设表先关
            clearInterval(timer);
            paw.css('background-image', pawOpen);
            paw.css('z-index', 1);


        }



}
