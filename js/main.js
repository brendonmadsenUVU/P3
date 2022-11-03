
function homepageDisplay() {
    document.getElementById("classes").style.display = "none";
    document.getElementById("items").style.display = "none";
    document.getElementById("homepage").style.display="flex";
}

function classesDisplay() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("items").style.display = "none";
    document.getElementById("classes").style.display = "flex";
}

function itemsDisplay() {
    document.getElementById("classes").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("items").style.display = "block";
}
