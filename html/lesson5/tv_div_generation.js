$(document).ready(function(){

    $.getJSON("https://easy-mock.com/mock/5c89ac5293fc1b57017f5937/example/mock", function (data){
      var $jsontip = $("#movies");
      var strHtml ="";
      //存储数据的变量
      console.log(data);
      $jsontip.empty();
      //清空内容
      var subjects = data.data.subjects;
      console.log(subjects);

      $.each(subjects, function (subIndex, subject){
        // 第一个主题
        if( subIndex == 0) {
            strHtml += "<div class='item active'>";
        }

        strHtml += "<div class='' style='display:inline-block;width:20%;padding: 10px;'>";
        strHtml += "<div class=' text-center' style='margin: 0;'>";
        strHtml += "<a  href='" + subject.alt + "'>";
        strHtml += "<div style='position: relative;width:100%;padding-bottom: 130%;'>";
        strHtml +=  "<img alt='300x200' src='" + subject.images.small +"'style='position: absolute;top: 0;left: 0;width: 100%;height: 100%;'/></div>";
        var title_short = subject.title.substring(0, 6);
        strHtml += "<h5>" + title_short + "<span style='color: #e09015;'>" + subject.rating.average + "</span></h5>";
        strHtml += "</a></div></div>"
        // 每10个主题重开一个div
        if( ((subIndex + 1 ) %10 == 0) && subIndex != 0) {
            strHtml += "</div><div class='item '>";
        }
        // 最后一个主题
        if(subIndex == subjects.length) {
            strHtml += "</div>";
        }
        // console.log("strHtml");
        $jsontip.html(strHtml);
      })
      //显示处理后的数据
      //
    })

    $.getJSON("https://easy-mock.com/mock/5c89ac5293fc1b57017f5937/example/mock", function (data){
      var $tvtopics = $("#tvs");
      var tvHtml ="";
      //存储数据的变量
      console.log(data);
      $tvtopics.empty();
      //清空内容
      var subjects = data.data.subjects;
      console.log(subjects);

      $.each(subjects, function (subIndex, subject){
        // 第一个主题
        if( subIndex == 0) {
            tvHtml += "<div class='item active'>";
        }

        tvHtml += "<div class='' style='display:inline-block;width:20%;padding: 10px;'>";
        tvHtml += "<div class=' text-center' style='margin: 0;'>";
        tvHtml += "<a  href='" + subject.alt + "'>";
        tvHtml += "<div style='position: relative;width:100%;padding-bottom: 130%;'>";
        tvHtml +=  "<img alt='300x200' src='" + subject.images.small +"'style='position: absolute;top: 0;left: 0;width: 100%;height: 100%;'/></div>";
        var title_short = subject.title.substring(0, 6);
        tvHtml += "<h5>" + title_short + "<span style='color: #e09015;'>" + subject.rating.average + "</span></h5>";
        tvHtml += "</a></div></div>"
        // 每10个主题重开一个div
        if( ((subIndex + 1 ) %10 == 0) && subIndex != 0) {
            tvHtml += "</div><div class='item '>";
        }
        // 最后一个主题
        if(subIndex == subjects.length) {
            tvHtml += "</div>";
        }
        // console.log("tvHtml");
        $tvtopics.html(tvHtml);
      })
      //显示处理后的数据
      //
    })




    });