/* Robin Vandenbrande | 301098179
 * Assignment 6 | COMP125-002 */

"use strict";

var LIST, IDX = -1;
var PHOTO1, PHOTO2, CURRENT_PHOTO;
var PROGRESS_CIRCLE;
var NEXT_PHOTO_TIMEOUT;

function fetchList(callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4)
            return;
        
        if (xhr.status !== 200)
            return callback(xhr.responseText);
        
        callback(
            null,
            xhr.responseText
                .split("\n")
                .filter(function (x) { return !!x.trim(); })
                .map(function (x) { return x.split(" "); })
        );
    };

    xhr.open("GET", "../images/gallery-list.txt");
    xhr.send();
}

function update() {
    fetchList(function (err, list) {
        if (err)
            return window.alert("Something went wrong while trying to fetch the image list!\n" + err);

        clearTimeout(NEXT_PHOTO_TIMEOUT);
        LIST = list;
        IDX = -1;
        nextImage();
    });
}

function nextImage(direction) {
    clearTimeout(NEXT_PHOTO_TIMEOUT);

    var new_photo = CURRENT_PHOTO === PHOTO1 ? PHOTO2 : PHOTO1;

    IDX = (IDX + (!direction ? 1 : direction)) % LIST.length;
    if (IDX < 0)
        IDX += LIST.length;
    var new_img = LIST[IDX];

    new_photo
        .empty()
        .append(
            $("<img>")
                .attr("src", "../images/" + new_img[0])
                .attr("alt", "Gallery image")
        )
        .fadeIn(500);
    
    CURRENT_PHOTO
        .fadeOut(500);
    
    PROGRESS_CIRCLE.css("animation", "none");
    setTimeout(function () {
        PROGRESS_CIRCLE.css({
            animation: "",
            animationDuration: new_img[1] / 1000 + "s"
        });
    }, 20);
    
    CURRENT_PHOTO = new_photo;

    NEXT_PHOTO_TIMEOUT = setTimeout(function () {
        nextImage();
    }, parseInt(new_img[1]));
}

function load() {
    PHOTO1 = $("#photo1");
    PHOTO2 = $("#photo2");
    CURRENT_PHOTO = PHOTO1;
    PROGRESS_CIRCLE = $("#progress-circle");

    $("#left").click(function (e) {
        e.preventDefault();
        nextImage(-1);
    });

    $("#right").click(function (e) {
        e.preventDefault();
        nextImage(+1);
    });

    $("#update").click(function (e) {
        e.preventDefault();
        update();
    });

    update();
}

$(load);
