function createElement(type, className) {
    var newElement = document.createElement(type);
    newElement.className = className ? className : '';
    return newElement;
}

function appendChildren(element, childrenArray) {
    console.log("element " + element);
    console.log("array " + childrenArray);
    childrenArray.forEach(element.appendChild, element);
}

function creareWrraper(main_gallery) {
    var li = createElement('li');
    var a = createElement('a');
    var figure = createElement('figure', "container-of-Gallery-item");
    appendChildren(main_gallery, [li]);
    appendChildren(li, [a]);
    appendChildren(a, [figure]);
    return figure;
}


function createIcons(iocnsArray) {
    var length = iocnsArray.length;
    var width = 100 / length;
    var childrenArray = [];


    for (var i=0; i< length; i++ ) {
        var icon = createElement('i', "fa " + iocnsArray[i]);
        icon.style.width = width;
        childrenArray[i] = icon;
    }

    var divIcon = createElement('div', "icons-container");
    appendChildren(divIcon, childrenArray);

    return divIcon;

}

function createContentObject(url) {
    var contatiner = createElement("div", "inner-container-item");
    var img = createImgObject(url);
    appendChildren(contatiner, [img]);

    return contatiner;
}

function createImgObject(url) {
    var img = createElement('img');
    img.src = url;
    return img;
}


function createTitleObject(titleText) {
    var title = createElement('figcaption');
    title.textContent = titleText;
    return title;
}


var data =
    '{ "images" : [ ' +
    ' {"url" : "http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/05/10/Heart-eyes-emoji.png", "title": "Hearts" , "icons" : ["fa-facebook", "fa-twitter"]},' +
    ' {"url" : "https://pmcdeadline2.files.wordpress.com/2015/07/emoji-1.png?w=446&h=299&crop=1", "title": "Doolars" , "icons" : ["fa-facebook", "fa-twitter"]},' +
    ' {"url" : "https://keetonsonline.files.wordpress.com/2015/05/0753.png", "title": "Sunglasses" , "icons" : ["fa-facebook", "fa-twitter"]},' +
    ' {"url" : "http://i.dailymail.co.uk/i/pix/2016/04/20/10/335B580C00000578-3549376-Both_tend_to_generally_be_used_to_show_awkwardness_nervousness_c-a-5_1461144171756.jpg", "title": "Teeth", "icons" : ["fa-facebook", "fa-twitter"] },' +
    ' {"url" : "http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-halo.png", "title": "Angel" , "icons" : ["fa-facebook", "fa-twitter"]},' +
    ' {"url" : "http://colorstickers.org/wp-content/uploads/2015/02/kiss-emoticons-for-facebook.png", "title": "Love" , "icons" : ["fa-facebook", "fa-twitter"]}' +
    ']}';

function createGallery(imagesArray) {

    if (!imagesArray && !imagesArray.length) {
        console.log ("Error in data or empty data");
        return false;
    }

    /* Get element from html */
    var main_gallery = document.getElementById("gallery_js");
    if (!main_gallery || main_gallery.length === 0) {

        main_gallery = createElement('ul');
        main_gallery.id = "gallery_js";
        var body = document.getElementsByTagName("body");

        appendChildren(body[0], [main_gallery]);
    }


    imagesArray.forEach(function(entry) {

        var wrapper = creareWrraper(main_gallery);

        var icon_container = createIcons(entry.icons);
        var inner_container = createContentObject(entry.url);
        var title = createTitleObject( entry.title);
        appendChildren(wrapper, [icon_container, inner_container, title]);

    });

}


