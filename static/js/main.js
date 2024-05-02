var bt = document.getElementsByClassName("sh-btn");

for (let i = 0; i < bt.length; i++) {
    bt[i].addEventListener("click", function (event) {
        for (let j = 0; j < bt.length; j++) bt[j].classList.remove("sh-btn-active");
        event.target.classList.add("sh-btn-active");
    });
}
