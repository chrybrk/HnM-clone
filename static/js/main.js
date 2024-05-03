var bt = document.getElementsByClassName("sh-btn");
var photo = document.getElementsByClassName("photo");

var da = document.getElementById("das");
document.addEventListener("mousedown", function(event){
    var e= document.getElementById("das_menu");
    if (da.contains(event.target)) {
        if (e.style.display === "none") e.style.display = "block";
        else e.style.display = "none";
    } else {
        e.style.display = "none";
    }
});

var sim = document.getElementById("sim");
document.addEventListener("mouseover", function(event) {
    var e = document.getElementById("sign_in_menu");
    if (sim.contains(event.target) || e.contains(event.target)) {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
});

for (let i = 0; i < bt.length; i++) {
    bt[i].addEventListener("click", function (event) {
        for (let j = 0; j < bt.length; j++) {
            bt[j].classList.remove("sh-btn-active");

            if (event.target.textContent === bt[j].textContent) {
                for (let k = 0; k < photo.length; k++)
                    photo[k].classList.add("sc-hide");
                photo[j].classList.remove("sc-hide");
            }
        }

        event.target.classList.add("sh-btn-active");
    });
}
