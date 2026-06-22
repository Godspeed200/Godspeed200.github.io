function klik() {
    alert("Het werkt!");
}

function veranderTekst() {
    document.getElementById("text").innerText =
        "🔥 Je hebt de tekst aangepast!";
}

function kleurVeranderen() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function verberg() {
    let el = document.getElementById("text");

    if (el.style.display === "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}
