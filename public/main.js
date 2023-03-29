let status = false;

function showHideMenu() {
    var menu = document.getElementById("daftarMenu");
    if (status) {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
        status = false;
    } else {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        status = true;
    }
    console.log(status);
}