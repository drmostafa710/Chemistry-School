    window.addEventListener("scroll" , function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

    window.addEventListener("scroll" , function() {
    var form = document.querySelector("form");
    form.classList.toggle("sticky", window.scrollY > 0)
})
