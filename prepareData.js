

//
//window.addEventListener('load', function (evt) {
//    console.log(evt);
//
//});


function retrieveData(url, callbackFn) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", callbackFn);
    req.open('GET', url);
    req.send();
}


retrieveData('https://jsonplaceholder.typicode.com/photos', function (evt) {
    console.log(evt.target.response);

    var array = evt.target.response;
    console.log(array.length);

    var obj  = JSON.parse(array);
    var dataArray = [];

    for (var i=0;i<10;i++) {
        dataArray[i] = { "url": obj[i].url ,
            "title":obj[i].title,
            "icons": ["fa-facebook", "fa-twitter"]};
    }
    createGallery(dataArray);

});