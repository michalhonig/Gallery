function create_gallery(index) {
    var pics = ["http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/05/10/Heart-eyes-emoji.png",
        "https://pmcdeadline2.files.wordpress.com/2015/07/emoji-1.png?w=446&h=299&crop=1",
        "https://keetonsonline.files.wordpress.com/2015/05/0753.png",
        "http://i.dailymail.co.uk/i/pix/2016/04/20/10/335B580C00000578-3549376-Both_tend_to_generally_be_used_to_show_awkwardness_nervousness_c-a-5_1461144171756.jpg",
        "http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-halo.png",
        "http://colorstickers.org/wp-content/uploads/2015/02/kiss-emoticons-for-facebook.png"];


    var main_gallery = document.getElementById("gallery_js");
    if (main_gallery.length === 0) {
        console.log("Error - list doesn't exist");
        return false;
    }

    pics.forEach(function(entry) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        var figure = document.createElement('figure');
        var div_icons = document.createElement('div');

        main_gallery.appendChild(li);
        li.appendChild(a);
        figure.className = "container-of-Gallery-item";
        a.appendChild(figure);

        div_icons.className = "icons-container";
        var fa_icon = document.createElement('i');
        fa_icon.className = "fa fa-facebook";
        div_icons.appendChild(fa_icon);
        var twitter_icon = document.createElement('i');
        twitter_icon.className = "fa fa-twitter";
        div_icons.appendChild(twitter_icon);
        figure.appendChild(div_icons);

        var div_inner = document.createElement('div');
        div_inner.className = "inner-container-item";
        var img = document.createElement('img');
        img.src = entry;
        div_inner.appendChild(img);
        figure.appendChild(div_inner);


        var figcaption = document.createElement('figcaption');
        figure.appendChild(figcaption);
    });

}


