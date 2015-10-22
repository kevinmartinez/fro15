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
              $(data.lessons).each(function(index, value){
                  var title = value.title,
                      lessons = value.lessons;

                  // Lägg till kursens titel
                  $(".lessonList").append("<h2>"+ title +"</h2>");
                  
                  // Loopa igenom alla lektioner för just den kursen
                  for (var i = 0; i < lessons.length; i++){
                    var lesson = lessons[i];

                    $(".lessonList").append("<li>" + lesson.date  + " <a href='" + lesson.url +"'>" + lesson.title + "</a></li>");
                  }
              });
       }
       });
