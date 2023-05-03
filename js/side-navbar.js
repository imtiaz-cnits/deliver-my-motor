const body = document.querySelector("body"),
sidebar = body.querySelector(".dashboard-sidebar"),
toggle = body.querySelector("#sideNavbarIcon");
toggles = body.querySelector("#sideNavbarXmarkIcon");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    toggle.style.visibility = "hidden";
});

toggles.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    toggle.style.visibility = "visible";
});