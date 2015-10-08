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
       
       
       $.ajax({
       url: 'lessons.json',
       dataType: 'json',
       type: 'get',
       cache: false,
       success: function(data){
           
              var html = '';
              var oldCourse;
              var course;
              $(data.lessons).each(function(index, value){                    
                      value.class!==oldCourse ? course = value.class : course = "";
                      oldCourse = value.class              
                     $(".lessonList").append("<h1>"+ course +"</h1><li> "+ value.date  + " <a href='" + value.url +"'>" + value.title + "</a></li>");
              });
       }
       });

