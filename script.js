function rotateBox() {
    const box = document.querySelector(".box");

    if(box.classList.contains("rotate1")) {
        box.classList.remove("rotate1");
        box.classList.add("rotate2");
    }

}