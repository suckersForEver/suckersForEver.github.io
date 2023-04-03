var burglary1 = document.getElementById("terrify1");
burglary1.style.display = "none";

function EnterToTheWorldCalledSuckers() {
    var formPass = document.getElementById("password");

    if (formPass.value === "4815162342") {
        location.replace("gallery.html");
    } else {
        formPass.value = '';
        burglary1.style.display = "block";
    }
}



