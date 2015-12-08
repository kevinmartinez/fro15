//DPY
$.ajax({
       url: 'dpy.json',
       dataType: 'json',
       type: 'get',
       cache: false,
       success: function(data){
              var html = '';
              $(data.elever).each(function(index, value){
                     $(".dpyList").append("<li><a href='" + value.dpy +"'>" + value.namn + "</a></li>");
              });
       }
       });





 //Lessons
$.ajax({
       url: 'lessons.json',
       dataType: 'json',
       type: 'get',
       cache: false,
       success: function(data){

       var $ul = $('<ul></ul>');
              getList(data.lessons, $ul);


             }
       });



var course;
var oldCourse;
function getList(item, $list) {
        
        if($.isArray(item)){
            $.each(item, function (key, value) {
                getList(value, $list);
            });
            return;
        }


       ;    
        if (item) {
            var $li = $('<li />')
            .css({
                "list-style-type" : "none"
            });
            
            if (oldCourse !== item.class){
                course = item.class;
            } else {
                course = "";
            }
            
                       
            if (item.bullets.length > 0) {
          
                      
                $(".lessonList").append($('<h2>' + course + '</h2><li><a href=" '+ item.url  +' ">' + item.title + '</a>' + '<button class="bpimg"></button></li>'));
                 
            } else {
                $(".lessonList").append($('<h2>' + course + '</h2><li><a href=" ' + item.url + '">' + item.title + '</a></li>'));
                 
            }
            
            oldCourse = item.class;
            if (item.bullets && item.bullets.length) {
                var $sublist = $("<ul/>")
                    .addClass('subList')


                $.each(item.bullets, function(i)
                    {
                        $sublist.append($('<li>' + item.bullets[i] + '</li>'));
                });
                $li.append($sublist)

            }
            $(".lessonList").append($li)
        }

         $("button").unbind().click(function(){
             $(this).parent().next().find('.subList').slideToggle();
        });
}

