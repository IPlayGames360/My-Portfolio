function openNav() {
    document.getElementById("sidebar").classList.add("openSidebar");
    document.querySelector(".openbtn").classList.add("rotateButton"); // Rotate button
}

function closeNav() {
    document.getElementById("sidebar").classList.remove("openSidebar");
    document.querySelector(".openbtn").classList.remove("rotateButton"); // Unrotate button
}

function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    const button = document.querySelector(".openbtn");

    if (sidebar.classList.contains("openSidebar")) {
        closeNav();
    } else {
        openNav();
    }
}