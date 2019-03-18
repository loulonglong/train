$(document).ready(function(){

    $.getJSON("https://easy-mock.com/mock/5c89ac5293fc1b57017f5937/example/mock", function (data){
      // 电影内容
      var $jsontip = $("#movies");
      var strHtml ="";
      // 电视内容
      var $tvtopics = $("#tvs");
      var tvHtml ="";
      //存储数据的变量
      $tvtopics.empty();
      //存储数据的变量
      $jsontip.empty();
      //清空内容
      var subjects = data.data.subjects;
      // console.log(subjects);

      var movie_count = 0;
      var tv_count = 0;

      $.each(subjects, function (subIndex, subject){
        // 第一个主题
        if (subject.subtype =="movie")  {

            if( movie_count == 0) {
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
            if( ((movie_count + 1 ) %10 == 0) && movie_count != 0) {
                strHtml += "</div><div class='item '>";
            }
            // 最后一个主题
            if(movie_count == subjects.length) {
                strHtml += "</div>";
            }
            movie_count++;
            console.log(movie_count);
            console.log(strHtml);

        }

        else if (subject.subtype =="tv")  {
            if( tv_count == 0) {
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
            if( ((tv_count + 1 ) %10 == 0) && tv_count != 0) {
                tvHtml += "</div><div class='item '>";
            }
            // 最后一个主题
            if(tv_count == subjects.length) {
                tvHtml += "</div>";
            }
            tv_count++;
        }

      });
      console.log(tvHtml);
      $jsontip.html(strHtml);
      $tvtopics.html(tvHtml);
      var $newtopics = $("#news");
      var newHtml ="";
      //存储数据的变量
      // console.log(data);
      $newtopics.empty();
      //清空内容
      var subjects = data.data.subjects;
      // console.log(subjects);

      $.each(subjects, function (subIndex, subject){
        // 第一个主题
        if( subIndex == 0) {
            newHtml += "<div class='item active'>";
        }

        newHtml += "<div class='' style='display:inline-block;width:20%;padding: 10px;'>";
        newHtml += "<div class=' text-center' style='margin: 0;'>";
        newHtml += "<a  href='" + subject.alt + "'>";
        newHtml += "<div style='position: relative;width:100%;padding-bottom: 130%;'>";
        newHtml +=  "<img alt='300x200' src='" + subject.images.small +"'style='position: absolute;top: 0;left: 0;width: 100%;height: 100%;'/></div>";
        var title_short = subject.title.substring(0, 8);
        newHtml += "<h5>" + title_short + "</h5>";
        newHtml +="<p><span style='color: #e09015;'>" + subject.rating.average + "</span></p>";

         newHtml += " <p><a class='btn btn-primary' href='#' style='width:80%;'>选购座位</a></p>";
        newHtml += "</div></div>"
        // 每10个主题重开一个div
        if( ((subIndex + 1 ) %5 == 0) && subIndex != 0) {
            newHtml += "</div><div class='item '>";
        }
        // 最后一个主题
        if(subIndex == subjects.length) {
            newHtml += "</div>";
        }
        // console.log("newHtml");
        $newtopics.html(newHtml);
      })
      //显示处理后的数据
      //
    })


    });