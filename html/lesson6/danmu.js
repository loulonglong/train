$(document).ready(function(){

  // 初始化弹幕数组
  var list=new Array("百度","阿里","腾讯","爱奇艺","土豆网","美团");
// 获取弹幕墙显示屏
  var DMScreen = $(".screen");
  // 弹幕显示上边界
  var screenTop = DMScreen.offset().top;
  // 弹幕显示下边界
  var screenBottom = screenTop+DMScreen.height();

  //点击发送弹幕按钮
  $("#submit").click(function(){
    //读取输入文本
    var inputValue = $("#comments").val();
    //清空输入文本
    $("#comments").val("");

    //输出的HTML语句
    var htmlDM = $("<div>"+inputValue+"</div>");
    // 加入屏幕
    DMScreen.append(htmlDM);
    // 移动弹幕
    animateDM(htmlDM);

    console.log("htmlDM:"+htmlDM.html());

    if($("#status").html()!="关闭弹幕"){
        $("#status").html("关闭弹幕");
    }
    //输出弹幕
    runDM();

  });

  //关闭、开启弹幕按钮点击事件
  $("#status").click(function(){
    if($("#status").html()=="关闭弹幕"){
        $("#status").html("开启弹幕");
        // 清空屏幕
        DMScreen.empty();
    }
    else if($("#status").html()=="开启弹幕"){
        $("#status").html("关闭弹幕");
        // 输出弹幕
        runDM();
    }
  });

  //生成弹幕按钮点击事件
  $("#generateDM").click(function() {
      generateDM();
      runDM();
  });

  //弹幕移动函数
  var animateDM = function(obj){
    // 设置CSS：内联，绝对位置。
    obj.css({
        display: "inline",
        position:"absolute"
    });
    //X轴起点
    var startPosition = DMScreen.width() - obj.width();
    // 随机Y轴起点
    var randYPosition = Math.round(Math.random()*(screenBottom - screenTop))+screenTop -100;
    // 随机速度
    var randSpeed = 20000 + 10000*Math.random();
    // 随机颜色
    var randColor = generateColor() ;
    // 设置初始位置，颜色
    obj.css({
        left:startPosition,
        top:randYPosition,
        color:randColor
    });
    console.log("X:" +startPosition + ",Y:" +randYPosition + ",Speed:" + randSpeed + ",Color:" +randColor);

    // 动画Html元素（回调函数最后删除元素）
    obj.animate({
        left:"-"+startPosition+"px"
    },randSpeed,function(){
        obj.remove();
    });
  }

  //颜色生成函数
  var generateColor = function(){
    return '#'+ Math.floor(Math.random()*0xffffff).toString(16);

  }
  // 模拟读取数据库数据加入数组
  var generateDM =function() {
    list.push("百度","阿里","腾讯","爱奇艺","土豆网","美团");
  }
  //弹幕部署函数
  var runDM = function(){
    if($("#status").html()=="关闭弹幕"){
        if(list.length > 0){
            //随机选择list里一个弹幕输出
            var index = Math.floor(Math.random()* list.length + 1)-1;
            var htmlDM = $("<div>"+list[index]+"</div>");
            DMScreen.append(htmlDM);
            console.log("htmlDM:"+htmlDM.html());
            animateDM(htmlDM);
            // 从数组中删除放出的弹幕
            list.splice(index, 1);

        }
    }
    // 每隔三秒调用一次
    setTimeout(runDM,3000);
  }



});
