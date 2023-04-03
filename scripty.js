var img1 = document.getElementById("img1");
function makeItChangeBitch(x) {
    if (x.classList.contains("col-12")) {
        x.classList.remove("col-12");
    } else {
        x.classList.add("col-12");
    }
}
