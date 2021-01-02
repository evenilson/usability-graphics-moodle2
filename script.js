function show(graphic) {
    var height = document.getElementById(graphic).style.height;

    if (height == "146px") {
        document.getElementById(graphic).style.height = '0px';
    } else {
        document.getElementById(graphic).style.height = '146px';
    }
}