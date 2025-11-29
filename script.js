// ------------------------------
//      SLIDER OTOMATIS
// ------------------------------

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // 3 detik
}


// ------------------------------
//          DARK MODE
// ------------------------------

function toggleDarkMode() {
    document.body.classList.toggle("dark");

    // Simpan preferensi user
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}

// Menerapkan mode tersimpan
window.onload = () => {
    if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark");
    }
};
