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
    let i;
    let x = document.getElementsByClassName("posters");
    let y = document.getElementsByClassName("posters-info")
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

var excull_name = ["Band", "Basket", "English Club", 
                "Futsal", "Jappannes Club", "KIR", 
                "Merpati Putih", "Modern Dance", "Pramuka",
                "Student Company", "Rohis/Rokris", "Shaman",
                "Taekwondo", "Tari Tradisional", "Tennis",
                "TIGMAPALA", "Vocal Group", "Voli"
];
var excull_desc = [];

function excull() {
    let i;

    let parent = document.getElementById("excull-container");
    
    for (i=0; i < excull_name.length; i++) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        
        h3.innerHTML = i+1 + ". " + excull_name[i];
        p.innerHTML = "lorem Ipsum loremipsum lorem ipsum lorem ipseum"

        parent.appendChild(div);
        div.appendChild(h3);
        div.appendChild(p)
    }

}
excull()