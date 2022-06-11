const ratingBtn = document.getElementsByClassName("rating__btn")
for(let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener("click", function () {
        let previous = document.getElementsByClassName("rating__btn--active");
        if(previous.length > 0) {
            previous[0].className = previous[0].className.replace(" rating__btn--active", "");
        }
        this.className += " rating__btn--active"
    })
}

function submit(){
    let current = document.getElementsByClassName("rating__btn--active");
    if(current.length > 0) {
        console.log(current)
        window.location.href = "thanks.html"
        localStorage.setItem("rating",current[0].innerHTML);
    } else {
        alert("You must choose rating")
    }
}