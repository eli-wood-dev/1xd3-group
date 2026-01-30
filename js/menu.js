function openMenu() {
    const x = document.getElementById("websiteTopnav");
    if (!x) return;
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
