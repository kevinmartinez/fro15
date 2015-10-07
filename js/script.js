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
