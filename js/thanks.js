let ratingSpan = document.getElementsByClassName("rating__result")
console.log(ratingSpan[0])
console.log(localStorage.getItem("rating"))
ratingSpan[0].innerHTML = `You selected ${localStorage.getItem("rating")} of 5`