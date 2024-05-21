function openNav() {
    document.getElementById("nav-content").style.left = "0";
}
function closeNav() {
    document.getElementById("nav-content").style.left = "-1000px";
}

var slideIndex = 1;
showPoster(slideIndex)

function changePoster(n) {
    showPoster(slideIndex += n)
}
function showPoster(n) {
    var i;
    var x = document.getElementsByClassName("posters");
    var y = document.getElementsByClassName("posters-info")
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    y[slideIndex-1].style.display = "block"
}