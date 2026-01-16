document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    lomakkeenValidointi();
});

function lomakkeenValidointi() {
    const käyttäjäid = document.getElementById("käyttäjäid").value;
    const salasana = document.getElementById("salasana").value;

    const nimi = document.getElementById("nimi").value;
    const osoite = document.getElementById("osoite").value;
    const email = document.getElementById("email").value;
    const maa = document.getElementById("maa").value;
    const postinro = document.getElementById("postinro").value;
    const sukupuoli = document.querySelector('input[name="sukupuoli"]:checked');
    const kieli = document.getElementById("kieli").value;

    // Nollaa virheilmoitukset
    resetoiVirheet();

    let onValidi = true;

    // Muuttujat salasanatarkistusta varten
    const numero = /[0-9]/.test(salasana);
    const kirjain = /[A-Z]/.test(salasana);
    const erikoisMerkki = /[!@£$€&%#]/.test(salasana);


    if (nimi === "") {
        onValidi = false;

        // Virheilmoitukset jos kentän tiedot ovat virheelliset
        document.getElementById("nimi-virhe").textContent = "Nimi on pakollinen!";
        document.getElementById("nimi-virhe").style.display = "block";
    }

    // Tarkistaa että salasana on vähintään 6 merkkiä, sisäktää numeron, ison kirjaimen ja erikoismerkin
    if (!salasana || salasana.length < 6 || !numero || !kirjain || !erikoisMerkki) {
        onValidi = false;

        document.getElementById("salasana-virhe").textContent = "Salasana ei täytä vaatimuksia!";
        document.getElementById("salasana-virhe").style.display = "block";
    }

    if (osoite === "") {
        onValidi = false;

        document.getElementById("osoite-virhe").textContent = "Osoite on pakollinen!";
        document.getElementById("osoite-virhe").style.display = "block";
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        onValidi = false;

        document.getElementById("email-virhe").textContent = "Virheellinen sähköpostiosoite!";
        document.getElementById("email-virhe").style.display = "block";
    }

    if (maa === "Valitse maa") {
        onValidi = false;

        document.getElementById("maa-virhe").textContent = "Valitse maa!";
        document.getElementById("maa-virhe").style.display = "block";
    } else {
        document.getElementById("maa-virhe").style.display = "none";
    }

    if (!sukupuoli) {
        onValidi = false;

        document.getElementById("sukupuoli-virhe").textContent = "Valitse sukupuoli!";
        document.getElementById("sukupuoli-virhe").style.display = "block";
    } else {
        document.getElementById("sukupuoli-virhe").style.display = "none";
    }

    if (kieli === "") {
        onValidi = false;

        document.getElementById("kieli-virhe").textContent = "Kieli on pakollinen!";
        document.getElementById("kieli-virhe").style.display = "block";
    }

    if (käyttäjäid === "") {
        onValidi = false;

        document.getElementById("käyttäjäid-virhe").textContent = "Käyttäjä ID on pakollinen!";
        document.getElementById("käyttäjäid-virhe").style.display = "block";
    } else if (käyttäjäid.length < 6) {
        onValidi = false;

        document.getElementById("käyttäjäid-virhe").textContent = "Käyttäjä ID on liian lyhyt!";
        document.getElementById("käyttäjäid-virhe").style.display = "block";
    }

    if (postinro.length !== 5) {
        onValidi = false;

        document.getElementById("postinro-virhe").textContent = "Postinumero on virheellinen!";
        document.getElementById("postinro-virhe").style.display = "block";
    }

    return onValidi;
}

// Funktio, joka nollaa virheilmoitukset
function resetoiVirheet() {
    document.getElementById("nimi-virhe").textContent = "";
    document.getElementById("osoite-virhe").textContent = "";
    document.getElementById("email-virhe").textContent = "";
    document.getElementById("salasana-virhe").textContent = "";
    document.getElementById("käyttäjäid-virhe").textContent = "";
    document.getElementById("postinro-virhe").textContent = "";
    document.getElementById("maa-virhe").textContent = "";
    document.getElementById("sukupuoli-virhe").textContent = "";
    document.getElementById("kieli-virhe").textContent = "";
}