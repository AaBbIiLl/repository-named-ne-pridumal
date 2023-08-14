document.getElementById("textcall").addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    document.getElementById("empty").classList.add("cover-block");
    document.getElementById("Thanks").classList.add("window-position");
});
document.getElementById("empty").addEventListener("click", () => {
    document.body.style.overflow = "visible";
    document.getElementById("empty").classList.remove("cover-block");
    document.getElementById("Thanks").classList.remove("window-position");
});