

    // var fs = require('fs');
    // var files = fs.readdirSync('/resources/gallery/');

    var images = ["resources/gallery/Art1.jpg", "resources/gallery/Art2.jpg", "resources/gallery/Art3.jpg"]

    images.forEach(function(x){
        var gallery = $("#Gallery");
        var li = $("<li></li>");
        li.addClass("uk-width-4-5")
        var div = $("<div></div>");
        div.addClass("uk-panel")
        var img = $("<img>").attr("src", x);

        div.append(img);
        li.append(div);
        gallery.append(li);
    })
    
