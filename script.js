function klik() {
    alert("Nice! Het werkt 🎉");
}

function veranderTekst() {
    document.getElementById("text").innerText =
        "🔥 Je hebt de tekst aangepast!";
}

function kleurVeranderen() {
    document.body.style.background =
        "linear-gradient(135deg, #" +
        Math.floor(Math.random()*16777215).toString(16) +
        ", #000)";
}

function verberg() {
    let el = document.getElementById("text");

    if (el.style.display === "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
