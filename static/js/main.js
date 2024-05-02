var bt = document.getElementsByClassName("sh-btn");
var photo = document.getElementsByClassName("photo");

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
