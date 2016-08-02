function createElement(type, className) {
    var newElement = document.createElement(type);
    if (className) {
        newElement.className = className;
    }
    return newElement;
}

function appendChildren(element, childrenArray) {
    for (var i=0; i< childrenArray.length; i++ ) {
        element.appendChild(childrenArray[i])
    }
    return element;
}


function createGallery(index) {

    /* Data*/
    var data =
    '{ "images" : [ ' +
        ' {"url" : "http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/05/10/Heart-eyes-emoji.png", "title": "Hearts" },' +
        ' {"url" : "https://pmcdeadline2.files.wordpress.com/2015/07/emoji-1.png?w=446&h=299&crop=1", "title": "Doolars" },' +
        ' {"url" : "https://keetonsonline.files.wordpress.com/2015/05/0753.png", "title": "Sunglasses" },' +
        ' {"url" : "http://i.dailymail.co.uk/i/pix/2016/04/20/10/335B580C00000578-3549376-Both_tend_to_generally_be_used_to_show_awkwardness_nervousness_c-a-5_1461144171756.jpg", "title": "Teeth" },' +
        ' {"url" : "http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-halo.png", "title": "Angel" },' +
        ' {"url" : "http://colorstickers.org/wp-content/uploads/2015/02/kiss-emoticons-for-facebook.png", "title": "Love" }' +
        ']}';

    var obj  = JSON.parse(data);
    var imagesArray = obj.images;

    console.log("images_array " + imagesArray);
    console.log("length " + imagesArray.length);

    if (!imagesArray && !imagesArray.length) {
        console.log ("Error in data or empty data");
        return false;
    }

    /* Get element from html */
    var main_gallery = document.getElementById("gallery_js");
    if (main_gallery.length === 0) {
        console.log("Error - list doesn't exist");
        return false;
    }



    imagesArray.forEach(function(entry) {

        var li = createElement('li');
        var a = createElement('a');
        var figure = createElement('figure', "container-of-Gallery-item");

        main_gallery = appendChildren(main_gallery, [li]);
        li = appendChildren(li, [a]);
        a = appendChildren(a, [figure]);

        /* Figure children */
        var div_icons = createElement('div', "icons-container");
        var div_inner = createElement('div', "inner-container-item");
        var figcaption = createElement('figcaption');
        figure = appendChildren(figure, [div_icons, div_inner, figcaption]);


        /* Icons */
        var fa_icon = createElement('i', "fa fa-facebook");
        var twitter_icon = createElement('i', "fa fa-twitter");
        div_icons = appendChildren(div_icons, [fa_icon, twitter_icon]);

        /* Img container */
        var img = createElement('img');
        div_inner = appendChildren(div_inner, [img]);

        /* Set data */
        img.src = entry.url;
        figcaption.textContent = entry.title;
    });

}


